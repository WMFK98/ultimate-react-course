import { useState, useEffect } from "react";
const KEY = "5b0f0cc";

export function useMovie(query, callback) {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    callback?.();
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    // handleCloseMovie();
    const controller = new AbortController();
    (async function fatchData() {
      setIsLoading(true);
      setError("");
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        if (!data.Search) throw Error("Not Found");
        setMovies(data.Search);
      } catch (er) {
        if (er.name !== "AbortError") setError(er.message);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => controller.abort();
  }, [query]);

  return { movies, error, isLoading };
}
