import './index.css'
import React from 'react'; 
function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4">
            <div className="text-lg font-bold">Site name</div>
            
            <div className="flex items-center justify-end">
                <div className="flex space-x-8">
                    <a href="#" className="text-lg">Page</a>
                    <a href="#" className="text-lg">Page</a>
                    <a href="#" className="text-lg">Page</a>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-lg ml-4">Button</button>
            </div>
        </nav>
    );
}

export default Navbar;