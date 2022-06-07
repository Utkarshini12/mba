import React, { useEffect, useState } from "react";
import Nav from "../components/Navbar";
import Ds from '../assets/Dss.jpeg'
import '../styles/home.css'
import {getAllMovies} from '../api/home.js'
import Slider from "../components/Slider";
import Footer from "../components/Footer";

import {CCarousel, CCarouselItem, CImage} from '@coreui/react'
import movie from '../assets/movie.svg'


function Home() {
    const [movieList, setMovieList] = useState([]);
    const [pageLoading, setPageLoading] = useState(true);


    useEffect(() => {
        getAllMovies().then(function (response) {
                if (response.status === 200) {                    
                    setMovieList(response.data);
                    console.log(response.data);
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
           <Slider />
           <div className="container my-4">
               <p className="fw-bolder">Recomended Movies</p>
               <div className="row">
                   
                   {
                    movieList.map((movie) =>(
                        <div className="col-lg-3 col-xs-6 d-flex align-items-stretch my-2">
                            <div className="card bg-dark shadow-lg" style={{width: 14 + "rem"}}>
                                <img src={movie.posterUrl} class="card-img-top" alt="..." style={{height: '100%'}}/>
                                <i class="bi bi-hand-thumbs-up-fill text-success px-2 ">58k </i>  
                                <p className="text-white fw-bolder px-2">{movie.name}</p>                              
                            </div>
                            
                        </div>
                    ))
                   }
                   
               </div>

               <div className="text-center m-5">
                   <img src={movie} />
               </div>
           </div>
          <Footer />
        </>
        ):
        <div>Fetching Movies from backend...</div>
    )
}

export default Home;