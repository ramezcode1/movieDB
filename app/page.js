import MovieCard from "./components/MovieCard";
import GenreButtonList from "@/app/components/GenreButtonList";

async function getPopularMovies() {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}


export default async function Home() {
    const data = await getPopularMovies();

    return (
        <main className="container mx-auto min-h-screen lg:px-14 md:px-10 px-7 my-16">
            <GenreButtonList/>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {data.results.map((movie) => {
                    const {id, title, poster_path, release_date, vote_average} = movie;

                    return (
                        <MovieCard
                            key={id}
                            id={id}
                            title={title}
                            posterPath={poster_path}
                            releaseDate={release_date}
                            vote_average={vote_average}
                        />
                    );
                })}
            </div>
        </main>
    );
}