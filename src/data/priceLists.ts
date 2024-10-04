import { Product } from '../types';

export interface PriceList {
  id: number;
  company: string;
  products: Product[];
}

// Начальные данные для демонстрации
export const priceLists: PriceList[] = [
  {
    id: 1,
    company: "AutoParts Inc.",
    products: [
      { id: 1, name: "Гальмівні колодки", price: 1199.99, articleNumber: "BP001", analogue: "BP001A", company: "AutoParts Inc.", image: "https://i.avto.pro/partimage/81671/gdb3466-id-13-476f9e92dbf49728d7344b39411da6cd-small.jpg" },
      { id: 2, name: "Масляний фільтр", price: 299.99, articleNumber: "OF002", analogue: "OF002A", company: "AutoParts Inc.", image: "https://i.avto.pro/img/ti/9/259/959.jpg" },
    ]
  }
];