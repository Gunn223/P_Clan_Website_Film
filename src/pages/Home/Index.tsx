import Card from '@/app/components/Card';
import Jumbotron from '@/app/components/Jumbotron';
import Navbar from '@/app/components/Navbar';
import React, { useRef } from 'react';

const Index = () => {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="bg-slate-800">
        <div className="m-auto w-[1140px] flex items-center ">
          <button
            onClick={scrollLeft}
            className="mt-6 mr-5  w-16 h-10 rounded-full bg-green-600 text-white">
            <span className="font-semibold">◀️</span>
          </button>
          <div
            className="flex gap-10 overflow-x-hidden"
            ref={scrollContainer}>
            <button className="mt-6 min-w-[122px] h-10 rounded-full bg-red-600   text-white">
              <span className="font-semibold">Action</span>
            </button>
            <button className="mt-6 min-w-[122px] h-10 rounded-full bg-slate-600   text-white">
              <span className="font-semibold">Comedy</span>
            </button>
            <button className="mt-6 min-w-[122px] h-10 rounded-full bg-slate-600   text-white">
              <span className="font-semibold">Adventure</span>
            </button>
            <button className="mt-6 min-w-[122px] h-10 rounded-full bg-slate-600   text-white">
              <span className="font-semibold">Drama</span>
            </button>
            <button className="mt-6 min-w-[122px] h-10 rounded-full bg-slate-600   text-white">
              <span className="font-semibold">Animation</span>
            </button>
            <button className="mt-6 min-w-[122px] h-10 rounded-full bg-slate-600   text-white">
              <span className="font-semibold">Fantasy</span>
            </button>
            <button className="mt-6 min-w-[122px] h-10 rounded-full bg-slate-600   text-white">
              <span className="font-semibold">Familiy</span>
            </button>
            <button className="mt-6 min-w-[122px] h-10 rounded-full bg-slate-600   text-white">
              <span className="font-semibold">Horor</span>
            </button>
          </div>
          <button
            onClick={scrollRight}
            className="mt-6 ml-5 w-16 h-10 rounded-full bg-green-600 text-white">
            <span className="font-semibold">▶️</span>
          </button>
        </div>
        <div className="mt-16 ">
          <h1 className="text-2xl mb-5 mx-[74px] text-white"> Recomended</h1>
          <div className="flex gap-x-6 overflow-x-auto  p-4 max-w-screen-xl mx-auto">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="mt-16 ">
          <h1 className="text-2xl mb-5 mx-[74px] text-white"> Popular</h1>
          <div className="flex gap-x-6 overflow-x-auto  p-4 max-w-screen-xl mx-auto">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="mt-16 ">
          <h1 className="text-2xl mb-5 mx-[74px] text-white"> Series</h1>
          <div className="flex gap-x-6 overflow-x-auto  p-4 max-w-screen-xl mx-auto">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
