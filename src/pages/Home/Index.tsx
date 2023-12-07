import Card from '@/app/components/Card';
import Jumbotron from '@/app/components/Jumbotron';
import Navbar from '@/app/components/Navbar';
import React, { useEffect, useRef, useState } from 'react';
import { PopularMovies, TopRatedFilm } from '@/services/apiFilm';
import { Carousel } from 'flowbite-react';

const Index = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [topRatedFilms, setTopRatedFilms] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;
  const [endIndex, setEndIndex] = useState(itemsPerPage);
  const [count, Setcount] = useState(1);
  const [countPerPage, setCountPerPage] = useState(20);
  const [endPages, setEndpages] = useState(0);
  // console.log(page);
  // console.log(data);
  // console.log('count perPage:', countPerPage);
  // console.log('end Index', endIndex);
  // console.log('end pages', endPages);
  // console.log('start idex', startIndex);
  // console.log('itemsper page', itemsPerPage);
  // console.log(count);
  useEffect(() => {
    const ReqData = PopularMovies();
    ReqData.then((dt) => {
      setData(dt);
    });
  }, []);
  useEffect(() => {
    const reloadPage = async () => {
      try {
        const reqData = await TopRatedFilm(page);
        setTopRatedFilms(reqData.results);
      } catch (error) {
        console.error('Error fetching top-rated films:', error);
      }
    };

    reloadPage();
  }, [page, setTopRatedFilms]);

  const handleNextButtonClick = () => {
    setStartIndex(startIndex + itemsPerPage);
    setEndIndex(endIndex + itemsPerPage);
    Setcount(count + 1);
    setEndpages(endPages + 20);
    if (endPages >= countPerPage) {
      setCountPerPage(countPerPage + 20);
      setPage(page + 1);
      setStartIndex(0);
      setEndIndex(5);
    }
  };

  const handlePrevButtonClick = () => {
    setStartIndex(startIndex - itemsPerPage);
    setEndIndex(endIndex - itemsPerPage);
    Setcount(count - 1);
    setEndpages(endPages - 20);
    if (endPages <= countPerPage) {
      setCountPerPage(countPerPage - 20);
      setPage(page - 1);
      setStartIndex(0);
      setEndIndex(5);
    }
  };
  // Memanggil reloadPage ketika komponen pertama kali dimuat dan setiap kali nilai page berubah

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
      <Carousel
        leftControl={<div style={{ visibility: 'hidden' }}>&lt;</div>}
        rightControl={<div style={{ visibility: 'hidden' }}>&gt;</div>}
        className="h-screen"
        slideInterval={3800}>
        {data.map((item: any) => (
          <Jumbotron
            popular={item.popularity}
            rating={item.vote_average}
            desc={item.overview}
            img={item.backdrop_path}
            key={item.id}
            title={item.title}
            year={item.release_date}
            relase={item.release_date}
          />
        ))}
      </Carousel>

      <div className="bg-[#0D0C11]">
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
          <h1 className="text-2xl mb-5 mx-[74px] text-white"> Top Rated</h1>

          <div className="flex gap-x-6 overflow-x-auto  p-4 max-w-screen-xl mx-auto">
            {topRatedFilms.slice(startIndex, endIndex).map((item: any, index) => (
              <Card
                key={item.id}
                img={item.poster_path}
                title={item.title}
                ratingFilm={item.release_date}
              />
            ))}
          </div>
        </div>
        <div className=" p-5 flex items-center ">
          <button
            onClick={handlePrevButtonClick}
            disabled={count === 1}
            className={`bg-blue-500  text-white font-bold py-2 px-4 rounded `}>
            Previous
          </button>
          <h1 className="text-white mx-5">Page {count}</h1>
          <button
            onClick={handleNextButtonClick}
            className={`bg-green-500 text-white font-bold py-2 px-4 rounded 
            `}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
