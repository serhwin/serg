import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'

interface Product {
  id: number;
  name: string;
  articleNumber: string;
  analogue: string;
  company: string;
}

interface LiveSearchProps {
  onSearch: (query: string) => void;
  products: Product[];
}

const LiveSearch: React.FC<LiveSearchProps> = ({ onSearch, products }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const navigate = useNavigate();

  const filterProducts = useCallback(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.articleNumber.toLowerCase().includes(query.toLowerCase()) ||
      product.analogue.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, products]);

  useEffect(() => {
    const filteredProducts = filterProducts();
    setResults(filteredProducts);
  }, [filterProducts]);

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
    setQuery(''); // Очищаем поле поиска после выбора
  };

  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Пошук запчастин за назвою, артикулом або аналогом..."
        className="w-full px-4 py-2 rounded-full border-2 border-blue-300 focus:outline-none focus:border-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <Search className="text-blue-500" />
      </button>
      {query && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg">
          {results.map((product) => (
            <div 
              key={product.id} 
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm text-gray-600">
                Артикул: {product.articleNumber} | Аналог: {product.analogue} | Компанія: {product.company}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LiveSearch