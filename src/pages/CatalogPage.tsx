import React from 'react'
import { Link } from 'react-router-dom'
import { priceLists } from '../data/priceLists'

const CatalogPage: React.FC = () => {
  const allProducts = priceLists.flatMap(priceList => priceList.products);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Каталог автозапчастин</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.price.toFixed(2)} грн</p>
              <p className="text-sm text-gray-500">Компанія: {product.company}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CatalogPage