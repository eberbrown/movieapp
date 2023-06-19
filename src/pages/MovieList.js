import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";

export const MovieList = ({apiPath, title}) => {

  const { data: movies } = useFetch(apiPath);

  useTitle(title);

  return (
    <>
      <main className="text-4xl m-10 py-2">
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
            
          </div>
        </section>
      </main>
    </>
  );
};
