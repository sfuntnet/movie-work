import React from "react";
import Movies from "../components/home/movies";
import Search from "../components/home/search";

export default function Home() {
    return (
        <React.Fragment>
            <div className="">
                <div className="pt-10 md:pt-52">
                    <div className="grid grid-cols-1">
                        <div className="flex justify-center">
                            <Search/>
                        </div>
                        <div className="flex justify-center">
                            <Movies/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}