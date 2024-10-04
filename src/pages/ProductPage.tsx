import React from 'react'
import { useParams } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'

const mockProduct = {
  id: 1,
  name: 'Гальмівні колодки',
  price: 1199.99,
  description: 'Високоякісні гальмівні колодки для оптимальної гальмівної потужності.',
  image: 'https://images.unsplash.com/photo-1600191763437-4b7f2f7b0f7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
}

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // У реальному додатку ви б отримували дані про продукт на основі ID
  const product = mockProduct

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl font-semibold mb-4">{product.price.toFixed(2)} грн</p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center">
          <ShoppingCart className="mr-2" />
          Додати до кошика
        </button>
      </div>
    </div>
  )
}

export default ProductPage