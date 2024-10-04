import React from 'react'
import { Trash2 } from 'lucide-react'

const mockCartItems = [
  { id: 1, name: 'Гальмівні колодки', price: 1199.99, quantity: 1 },
  { id: 2, name: 'Масляний фільтр', price: 299.99, quantity: 2 },
]

const CartPage: React.FC = () => {
  const total = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Ваш кошик</h1>
      {mockCartItems.length === 0 ? (
        <p>Ваш кошик порожній.</p>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            {mockCartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-4 last:border-b-0">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.price.toFixed(2)} грн x {item.quantity}</p>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Всього:</span>
              <span className="text-xl font-bold">{total.toFixed(2)} грн</span>
            </div>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
              Перейти до оформлення
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage