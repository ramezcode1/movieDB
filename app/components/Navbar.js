import React from "react";
import Link from "next/link";
import {TbMovie} from "react-icons/tb";

const Navbar = () => {
    return (
        <header className="bg-slate-700 text-sky-200 text-4xl font-bold p-4 flex">
            <TbMovie/>
            <Link href={`/`}>MovieDB</Link>
        </header>
    );
};

export default Navbar;