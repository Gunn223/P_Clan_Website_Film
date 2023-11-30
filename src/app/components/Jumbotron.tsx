import React from 'react';
import Jmbo from '../asset/Jumbo-bg.png';

const Jumbotron = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center text-white  bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://www.cinematographe.it/wp-content/uploads/2021/08/trailer-di-spider-man-no-way-home-dr-strange-1536x864.jpg)',
      }}>
      <div className="l">
        <p className="w-16 h-6 text-center rounded-md items-center  bg-red-600 text-white font-semibold">TOP</p>
        <h1 className="font-semibold text-6xl">Spider man no way home </h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem. Consectetur donec cursus massa nunc
          ullamcorper semper.
        </p>
        <p className="mt-6">
          2022 |<span className="text-red-600">16+</span>| 1 Seans | TV series for teenagers
        </p>
        <span className="mt-6 flex gap-6 items-center">
          <h3 className="font-semibold text-2xl">⭐5.8</h3>
          <p>Seans 1 - Eplscode 1 - Genre comedy, detective, detective </p>
        </span>
        <button className="mt-6 w-28 h-10 rounded-full bg-red-600 ">
          <span className="font-semibold">▷ Watch</span>
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
