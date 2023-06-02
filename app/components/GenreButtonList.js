import Link from "next/link";

async function getGenreList() {
    const res = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`
    );

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

const GenreButtonList = async () => {
    const data = await getGenreList();

    const renderButtons = data.genres.map(genre =>
        // <Link href={`/movie/${genre.id}`}
        <Link href={{pathname: `/movie/${genre.name}`, query: { id: genre.id }}}
              key={genre.id}
              className="px-6 py-2 border-2 mt-2 border-gray-200
                    text-gray-900 font-medium text-xs leading-tight rounded bg-gray-300
                    hover:bg-gray-50 hover:bg-opacity-70 focus:outline-none focus:ring-1
                    focus:bg-lime-100 transition duration-150 ease-in-out"
        >
            {genre.name}
        </Link>
    );

    return (
        <div className="flex justify-center">
            <div className="flex space-x-2 justify-center items-center  flex-wrap max-w-screen-lg my-5">
                {renderButtons}
            </div>
        </div>
    );
}

export default GenreButtonList;