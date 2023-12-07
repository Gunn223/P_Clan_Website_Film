export const PopularMovies = async () => {
  try {
    const req = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    );
    const res = await req.json();
    // console.log(res);
    return res.results;
  } catch (error) {
    console.log('popular film err', error);
  }
};

export const TopRatedFilm = async (pageCount = 1) => {
  try {
    const req = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageCount}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    );
    const res = await req.json();
    // console.log(res);
    return res;
  } catch (error) {
    console.log('popular film err', error);
  }
};
