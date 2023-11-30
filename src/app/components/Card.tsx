import React, { useState } from 'react';

const Card = () => {
  const [rating, setRating] = useState(5);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };
  return (
    <div
      className="bg-cover w-[264px] h-[396px] rounded-md flex flex-wrap"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1534809027769-b00d750a6bac?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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
        <h1 className="font-semibold text-2xl text-white">Spider man no way home</h1>
      </div>
    </div>
  );
};

export default Card;
