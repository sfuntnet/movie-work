import React, {useEffect} from "react";
import app from "../../api/app";
import {Rings} from "react-loader-spinner";
import {useDispatch, useSelector} from "react-redux";
import {movies, loadingChange} from "../../redux/features/movieSlice";

export default function Movies() {
    const movieState = useSelector((state) => state.movies.data);
    const hiddenMovies = useSelector((state) => state.movies.hiddenMovies);
    const loading = useSelector((state) => state.movies.loading);
    const dispatch = useDispatch()

    useEffect(() => {
        app.get('/imdb/imdbSearchByName?query=inception').then(function (resp) {
            setTimeout(() => {
                dispatch(movies(resp.data.result))
                dispatch(loadingChange(false))
            }, 1000)
        })
    },[])

    return (
        <React.Fragment>
            <div className="flex justify-center">
                <Rings
                    visible={loading}
                    height="80"
                    width="80"
                    color="#666666"
                    ariaLabel="rings-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:ml-10 lg:ml-0">
                {
                    movieState.map((value, key) => {
                        return (
                            <div className={hiddenMovies} key={key}>
                                <div
                                    className="bg-gray-100 p-5 rounded-md lg:w-72 relative m-1">
                                    <img
                                        src={value.Poster === "N/A" || value.Poster === 'https://m.media-amazon.com/images/M/MV5BNGRkYzkzZmEtY2YwYi00ZTlmLTgyMTctODE0NTNhNTVkZGIxXkEyXkFqcGdeQXVyNjE4MDMwMjk@._V1_SX300.jpg' ? 'https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_SX300.jpg' : value.Poster}
                                        className="mt-16 w-60 h-80 rounded-md"/>
                                    <div className="mt-2">
                                        <div className="grid grid-cols-2">
                                            <div className="flex justify-start">
                                                <p>Type:<span className="ml-1 font-bold">{value.Type}</span></p>
                                            </div>
                                            <div className="flex justify-end">
                                                <p>Year:<span className="ml-1 font-bold">{value.Year}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 left-5">
                                        <h2 className="font-bold text-xl uppercase">{value.Title}</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}