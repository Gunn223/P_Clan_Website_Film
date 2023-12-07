import React, { useEffect, useState } from 'react';

interface CardType {
  img: string;
  title: string;
  ratingFilm: string;
}

const Card: React.FC<CardType> = ({ img, title, ratingFilm }) => {
  // console.log('5data', img, title, ratingFilm);
  const [rating, setRating] = useState(5);

  // Efek untuk memantau perubahan ratingFilm
  useEffect(() => {
    // Jika ratingFilm berupa string, ubah menjadi angka
    const numericRatingFilm = parseInt(ratingFilm, 10);
    setRating(numericRatingFilm);
  }, [ratingFilm]);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };
  return (
    <div
      className="bg-cover w-[234px] h-[336px] rounded-md flex flex-wrap"
      style={{
        backgroundImage: `url(${`https://image.tmdb.org/t/p/original${img}`})`,
      }}>
      <div className=" h-full flex  items-start justify-end flex-col p-6">
        <h1 className="text-white w-16 h-6 text-center rounded-sm bg-red-600">Action</h1>
        <div>
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              onClick={() => handleRatingChange(index + 1)}
              className={`cursor-pointer text-2xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}>
              ★
            </span>
          ))}
        </div>
        <h1 className="font-semibold text-2xl text-white">{title}</h1>
      </div>
    </div>
  );
};

export default Card;
