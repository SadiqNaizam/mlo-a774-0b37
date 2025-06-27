import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-4 px-4">
        <p className="text-sm text-gray-500 mb-2 sm:mb-0">
          &copy; {currentYear} SwiftLogin. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Link to="#" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
            Terms of Service
          </Link>
          <Link to="#" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;