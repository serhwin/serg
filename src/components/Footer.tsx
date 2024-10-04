import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">АвтоЗапчастини Маркет</h3>
            <p>Ваш універсальний магазин якісних автозапчастин</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Швидкі посилання</h4>
            <ul>
              <li><a href="/" className="hover:text-blue-300">Головна</a></li>
              <li><a href="/catalog" className="hover:text-blue-300">Каталог</a></li>
              <li><a href="/cart" className="hover:text-blue-300">Кошик</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Зв'яжіться з нами</h4>
            <p>Електронна пошта: info@autozapchastyny.com</p>
            <p>Телефон: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 АвтоЗапчастини Маркет. Усі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer