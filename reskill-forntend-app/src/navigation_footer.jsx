import './index.css';
import React from 'react'; 



function navigation_footer() {
  return (
    
    <footer className="p-8">
        <hr></hr>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 mt-5">
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Site name</h2>
          <div className="flex space-x-4 text-gray-500">
          
            <a href="#" target="_blank"  className="hover:text-black">
             
               Facebook
            </a>
            <a href="#" target="_blank" className="hover:text-black">
              LinkedIn
            </a>
            <a href="#" target="_blank"  className="hover:text-black">
               YouTube
            </a>
            <a href="#" target="_blank"  className="hover:text-black">
               Instagram
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Topic</h3>
          <ul className="space-y-2 text-gray-500">
            <li key="page1"><a href="#" className="hover:text-black">Page 1</a></li>
            <li key="page2"><a href="#" className="hover:text-black">Page 2</a></li>
            <li key="page3"><a href="#" className="hover:text-black">Page 3</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Topic</h3>
          <ul className="space-y-2 text-gray-500">
            <li key="page4"><a href="#" className="hover:text-black">Page 4</a></li>
            <li key="page5"><a href="#" className="hover:text-black">Page 5</a></li>
            <li key="page6"><a href="#" className="hover:text-black">Page 6</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default navigation_footer;