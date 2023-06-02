import Image from "next/image";
import {AiFillStar} from "react-icons/ai";

export default async function MovieDetail({params}) {
    const {movie} = params;
    const imagePath = "https://image.tmdb.org/t/p/original";

    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
    );

    const data = await res.json();

    const {
        release_date,
        revenue,
        title,
        vote_average,
        genres,
        poster_path,
        overview,
        vote_count,
        runtime,
        budget
    } = data;
    return (
        <main>
            <section className="flex justify-around flex-wrap py-5">
                <div className="max-w-sm">
                    <Image
                        height={700}
                        width={500}
                        src={imagePath + poster_path}
                        alt={title}
                        className="rounded-lg"
                    />
                </div>
                <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
                    <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{title}</h1>
                    <p className="my-4">{overview}</p>
                    {genres ? (
                        <p className="my-7 flex flex-wrap gap-2">
                            {genres.map((genre) => (
                                <span className="mr-2 border border-slate-400 rounded dark:border-gray-600 p-2"
                                      key={genre.id}>{genre.name}</span>
                            ))}
                        </p>
                    ) : ""}

                    <div className="flex items-center">
                        <AiFillStar className="w-5 h-5 text-yellow-400"/>
                        <p className="ml-2 text-gray-900 dark:text-white">{vote_average}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <span className="text-gray-900 dark:text-white">{vote_count} reviews</span>
                    </div>

                    <p className="my-4">
                        <span className="mr-2 font-bold">Runtime:</span>
                        <span>{runtime} min.</span>
                    </p>

                    <p className="my-4">
                        <span className="mr-2 font-bold">Budget:</span>
                        <span>{budget}</span>
                    </p>

                    <p className="my-4">
                        <span className="mr-2 font-bold">Revenue:</span>
                        <span>{revenue}</span>
                    </p>

                    <p className="my-4">
                        <span className="mr-2 font-bold">Release Date:</span>
                        <span>{release_date}</span>
                    </p>
                </div>
            </section>
        </main>
    );
}