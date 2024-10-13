const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS to allow cross - origin requests
app.use(cors({
  origin: 'http://localhost:3001'  
}));

// Route to fetch and combine posts and photos
app.get('/api/posts', async (req, res) => {
  try {
    const [postsResponse, photosResponse] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/photos')
    ]);

    const posts = postsResponse.data;
    const photos = photosResponse.data;

    // Combine posts and photos based on matching IDs
    const combinedData = posts.map(post => {
      const photo = photos.find(photo => photo.id === post.id);
      return {
        ...post,
        photoUrl: photo ? photo.url : null,
        photoTitle: photo ? photo.title : null
      };
    });

    res.json(combinedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
