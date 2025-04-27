import React from 'react';

interface CardProps {
  titulo: string;
  text: string;
  image: string;
  rating: number;
  reviews: number;
  price: string;
  onclick?: () => void;
}

const Card: React.FC<CardProps> = ({ titulo, text, image, rating, reviews, price, onclick }) => {
  return (
    <div >
      <div >
        <img src={image} alt="card-image" className="object-cover w-full h-full" />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">{titulo}</h6>
        <p className="text-slate-600 leading-normal font-light">{text}</p>
        <p>
          {'★'.repeat(rating)}
          {'☆'.repeat(5 - rating)} ({reviews} reseñas)
        </p>
        <strong>{price}</strong>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        <button
          onClick={onclick}
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default Card;
