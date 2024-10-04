import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, Upload } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">АвтоЗапчастини Маркет</Link>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex space-y-4 md:space-y-0 md:space-x-4 absolute md:relative top-full left-0 right-0 bg-blue-600 md:bg-transparent p-4 md:p-0`}>
          <Link to="/" className="block hover:text-blue-200">Головна</Link>
          <Link to="/catalog" className="block hover:text-blue-200">Каталог</Link>
          <Link to="/upload-price-list" className="block hover:text-blue-200">
            <Upload className="inline-block mr-2" size={18} />
            Завантажити прайс-лист
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="hover:text-blue-200">
            <ShoppingCart />
          </Link>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header