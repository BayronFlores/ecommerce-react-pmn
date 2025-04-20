// src/data/homeData.ts

export const benefits = [
  {
    icon: '🚚',
    title: 'Entrega en ayunas',
    description: 'Entrega en 24/h',
  },
  {
    icon: '↩️',
    title: 'Devolución en 24 horas',
    description: 'Garantía de devolución del 100% del dinero',
  },
  {
    icon: '💳',
    title: 'Pago seguro',
    description: 'Tu dinero está seguro',
  },
  {
    icon: '🎧',
    title: 'Soporte 24/7',
    description: 'Contacto/mensaje en vivo',
  },
];

export interface Product {
  title: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  status?: string;
  image: string;
}

export const productShowcase: Product[] = [
  {
    title:
      'Xbox Series S - 512GB SSD Console with Wireless Controller - EU Version',
    price: '$442.12',
    oldPrice: '$865.99',
    discount: '32% OFF',
    status: 'HOT',
    image: 'https://i.imgur.com/qRzMuqF.png',
  },
  {
    title: 'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear',
    price: '$2,300',
    status: 'SOLD OUT',
    image: 'https://i.imgur.com/t2QHokz.png',
  },
  {
    title: 'Simple Mobile 4G LTE Prepaid Smartphone',
    price: '$220',
    image: 'https://i.imgur.com/pBB5aXg.png',
  },
  {
    title: '4K UHD LED Smart TV with Chromecast Built-in',
    price: '$1,50',
    oldPrice: '$865',
    discount: '19% OFF',
    image: 'https://i.imgur.com/M3VvnaD.png',
  },
  {
    title: 'Sony DSCHX8 High Zoom Point & Shoot Camera',
    price: '$1,200',
    image: 'https://i.imgur.com/UdJtwYO.png',
  },
  {
    title: 'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear',
    price: '$299',
    image: 'https://i.imgur.com/0K7rIEe.png',
  },
  {
    title: 'Dell Optiplex 7000x7480 All-in-One Computer Monitor',
    price: '$70',
    oldPrice: '$865.99',
    image: 'https://i.imgur.com/MtK2Mi6.png',
  },
  {
    title: 'Portable Wshing Machine, 11lbs capacity Model 18NMFIM',
    price: '$1,50',
    status: 'HOT',
    image: 'https://i.imgur.com/DtAXjAb.png',
  },
  {
    title: '2-Barrel Carburetor Carb 2100 Engine Increase Horsepower',
    price: '$250',
    oldPrice: '$368',
    discount: '32% OFF',
    image: 'https://i.imgur.com/9tA0dsz.png',
  },
];
