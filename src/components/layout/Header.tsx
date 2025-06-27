import React from 'react';
import { Link } from 'react-router-dom';
import { Bolt } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');

  return (
    <header className="absolute top-0 left-0 w-full p-4 sm:p-6">
      <div className="container mx-auto px-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-800 hover:text-gray-900 transition-colors">
          <Bolt className="h-6 w-6 text-indigo-600" />
          <span>SwiftLogin</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;