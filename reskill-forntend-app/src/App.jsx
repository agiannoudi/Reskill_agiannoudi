import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  // React Router for navigation
import './index.css';  // Importing the style CSS file
import Navigation from './navigation.jsx';  // Import Navigation component
import NavigationFooter from './navigation_footer.jsx';  // Import NavigationFooter component
import SinglePost from './SinglePost';  // Import SinglePost component for detailed post view

function App() {
  const [combinedData, setCombinedData] = useState([]);
  const [error, setError] = useState(null);

  // Fetch data from the backend API
  useEffect(() => {
    fetch('http://localhost:5000/api/posts')  // Fetch from backend
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setCombinedData(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;  // Display error message if fetching fails
  }

  return (
    <Router>
      <Navigation /> {/* Importing the navigation bar */}
      
      <Routes>
        {/* Home Route: Display post list and first post details */}
        <Route path="/" element={
          <>
            {/* Start the Post Details View */}
            <div className="py-12">
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">{combinedData[0] && combinedData[0].title}</h1>
              </div>

              <div className="space-y-u6">
                {combinedData[0] && combinedData[0].photoUrl && (
                  <div className="flex justify-center items-center h-screen">
                    <img
                      src={combinedData[0].photoUrl}
                      alt="Post image"
                      className="max-w-[1200px] h-auto rounded-lg"
                    />
                  </div>
                )}
                <div className="text-lg text-gray-700 p-30">
                  <p>{combinedData[0] && combinedData[0].body}</p>
                </div>
              </div>
            </div>

            {/* Start the Post List */}
            <div className="py-8">
              <h2 className="text-2xl font-semibold mb-6">Related articles or posts</h2>
              <div className="grid grid-cols-3 gap-8">
                {combinedData.slice(0, 9).map((item) => (
                  <div key={item.id} className="space-y-2">
                    {item.photoUrl && (
                      <img
                        src={item.photoUrl}
                        alt={item.photoTitle}
                        className="w-[400px] max-h-[340px] object-cover rounded-md"
                      />
                    )}
                    {/* Link to the SinglePost page when the user clicks on the post title */}
                    <Link to={`/post/${item.id}`}>
                      <h3 className="text-lg font-semibold text-blue-500 hover:underline">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-gray-500">{item.userId}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        } />

        {/* Single Post Route: Display a detailed post view */}
        <Route path="/post/:id" element={<SinglePost combinedData={combinedData} />} />
      </Routes>

      <NavigationFooter /> {/* Importing the footer */}
    </Router>
  );
}

export default App;
