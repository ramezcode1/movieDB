import Link from "next/link";
import React from "react";
import Image from "next/image";

const MovieCard = ({title, id, releaseDate, posterPath, vote_average}) => {
    const imagePath = "https://image.tmdb.org/t/p/original";

    return (
        <div className="border border-gray-500 rounded-lg shadow-2xl py-5">
            <h1 className="text-2xl text-center text-blue-500 font-bold pb-5 px-3">
                {title}
            </h1>

            <Link href={`/${id}`} className="flex justify-center">
                <Image
                    width={300}
                    height={200}
                    src={imagePath + posterPath}
                    alt={title}
                    className="rounded-lg hover:scale-90 duration-1000"
                />
            </Link>

            <div className="text-center">
                <p className="mt-2 text-base leading-relaxed text-secondary">
                    Release date ({releaseDate})
                </p>
                <p className="font-bold text-secondary">
                    Rating {vote_average}
                </p>
                <Link className="mt-4 block text-blue-500 underline"
                   href={`/${id}`}>
                    Learn more
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;