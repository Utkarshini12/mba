import React, { useEffect, useState } from "react";
import Nav from "../components/Navbar";
import Ds from '../assets/Dss.jpeg'
import '../styles/home.css'
import {getAllMovies} from '../api/home.js'

function Home() {
    const [movieList, setMovieList] = useState([]);
    const [pageLoading, setPageLoading] = useState(true);


    useEffect(() => {
        getAllMovies().then(function (response) {
                if (response.status === 200) {                    
                    setMovieList(response.data);
                    setPageLoading(false);
                    
                }
            }).catch(function (error) {
                    if(error.status===401){
                        localStorage.clear();
                        window.location.href ="/"
                    }
                    console.log(error);
                    setPageLoading(false);
                });
            

      }, []);
      const selectedMovie = (movieName) => {
          var index = movieList.findIndex(function(movie) {
            return movie.name.toUpperCase() === movieName.toUpperCase()
          });



        //   getMovie
      }
      return (
        !pageLoading ? ( <>
           <Nav movies={movieList.map((movie)=>movie.name)}  onMovieSelect={selectedMovie}/>
           <div className="container mx-5 my-2">
               <p className="fw-bolder">Recomended Movies</p>
               <div className="row">
                   {
                    movieList.map((movie) =>(
                        <div className="col d-flex h-200">
                            <div className="card " style={{height: 20 + "rem", width: 15 + "rem"}}>
                                <img src={movie.posterUrl} class="card-img-top" alt="..."/>
                                <div className="bg-dark text-white py-2 top">
                                <i class="bi bi-hand-thumbs-up-fill p-2 text-success">58k </i>
                                {movie.name}
                                
                                </div>
                            </div>
                        </div>
                    ))
                   }
                   
               </div>
           </div>
        </>
        ):
        <div>Fetching Movies from backend...</div>
    )
}

export default Home;