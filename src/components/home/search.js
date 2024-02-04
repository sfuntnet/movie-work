import React from "react";
import app from "../../api/app";
import {useDispatch} from "react-redux";
import {loadingChange, movies, moviesHidden} from "../../redux/features/movieSlice";

export default function Search() {
    const dispatch = useDispatch()
    const change = (e) => {
        dispatch(loadingChange(true))
        dispatch(moviesHidden('hidden'))
        setTimeout(() => {
            app.get('/imdb/imdbSearchByName?query=inception').then(function (resp) {
                const found = resp.data.result
                const filteredResults = found.filter((element) => {
                    return element.Title.toLowerCase().includes(e.target.value.toLowerCase());
                });
                dispatch(movies(filteredResults))
                dispatch(loadingChange(false))
                dispatch(moviesHidden('block'))
            })
        }, 1000)
    }
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="col-start-3 w-72 md:w-64 lg:w-72 relative m-1">
                    <div className="flex justify-end">
                        <input className="border-0 border-black p-3 rounded-full text-lg" onChange={change}
                               placeholder="Search..."/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}