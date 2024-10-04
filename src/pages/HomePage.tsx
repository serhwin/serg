import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import LiveSearch from '../components/LiveSearch'
import PriceListsOverview from '../components/PriceListsOverview'
import { priceLists } from '../data/priceLists'

const HomePage: React.FC = () => {
  const allProducts = useMemo(() => priceLists.flatMap(priceList => priceList.products), []);
  const [searchResults, setSearchResults] = useState(allProducts);

  const handleSearch = useCallback((query: string) => {
    const filteredProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.articleNumber.toLowerCase().includes(query.toLowerCase()) ||
      product.analogue.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredProducts);
  }, [allProducts]);

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Ласкаво просимо до АвтоЗапчастини Маркет</h1>
        <p className="text-xl mb-6">Знайдіть потрібні запчастини для вашого автомобіля</p>
        <LiveSearch onSearch={handleSearch} products={allProducts} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Популярні категорії</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/catalog" className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200 transition duration-300">
            Гальмівна система
          </Link>
          <Link to="/catalog" className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200 transition duration-300">
            Двигун
          </Link>
          <Link to="/catalog" className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200 transition duration-300">
            Підвіска
          </Link>
          <Link to="/catalog" className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200 transition duration-300">
            Електрика
          </Link>
        </div>
      </section>

      <PriceListsOverview />
    </div>
  )
}

export default HomePage