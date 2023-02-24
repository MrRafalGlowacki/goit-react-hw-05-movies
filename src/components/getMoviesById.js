const API_KEY = 'b942b8bf626a04f48b07153a95ee51a0';

export const getMoviesById = async movieId => {
  const link = `https://api.themoviedb.org/3/movie/${movieId}`;

  try {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
    });

    const url = `${link}?${searchParams}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
