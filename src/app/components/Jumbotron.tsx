import React from 'react';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';

interface JumbotronProps {
  title: string;
  desc: string;
  img: string;
  year: string;
  relase: string;
  rating: string;
  popular: string;
}
const Jumbotron: React.FC<JumbotronProps> = ({ title, desc, img, relase, rating, popular }) => {
  const ratingInteger = parseFloat(rating.toString().substring(0, 3));

  return (
    <div className="h-full flex justify-center items-center text-white  bg-cover bg-center bg-b">
      <div className="h-full w-full flex justify-center items-center text-white relative  bg-cover bg-center backdrop-brightness-50 bg-black/30">
        <Image
          className="absolute -z-10 opacity-40"
          layout="fill"
          objectFit="cover"
          src={`https://image.tmdb.org/t/p/original${img}`}
          alt="sapidermen"
        />
        <div className="w-10/12">
          <p className="w-16 h-6 text-center rounded-md items-center  bg-red-600 text-white font-semibold">TOP</p>
          <h1 className="font-semibold text-6xl">{title}</h1>
          <div className="w-1/2">
            <p className="mt-3">{desc}</p>
          </div>
          <div className="flex items-center gap-x-3 mt-6">
            <span className=" flex gap-6 items-center">
              <h3 className="font-semibold text-2xl">⭐{ratingInteger}</h3>
            </span>
            <p>
              Relase {relase} | <span className="text-red-600 font-semibold">Popularity: {popular}</span>
            </p>
          </div>
          <button className="mt-6 w-28 h-10 rounded-full bg-red-600 ">
            <span className="font-semibold">▷ Watch</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
