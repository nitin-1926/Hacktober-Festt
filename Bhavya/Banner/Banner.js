import React, { useState, useEffect } from 'react';
import axios from '../../common/axios';
import requests from '../../common/requests';
import './Banner.css';

const baseUrl = 'https://image.tmdb.org/t/p/original';

const Banner = () => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const randomNumber = Math.floor(Math.random() * request.data.results.length - 1);
            setMovie(request.data.results[randomNumber]);
            return request;
        }
        fetchData();
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
                    ${baseUrl}${movie?.backdrop_path}
                )`,
                backgroundPosition: 'center center'
            }}
        >
            <div className='bannerContents'>
                <h1 className='bannerTitle'> {movie?.title || movie?.name || movie?.original_name} </h1>

                <div className='bannerButtons'>
                    <button className='bannerButton'>Play</button>
                    <button className='bannerButton'>My List</button>
                </div>

                <h1 className='bannerDescription'>{truncate(movie?.overview, 150)}</h1>
            </div>

            <div className="bannerFadeBottom"></div>
            
        </header>
    )
}

export default Banner
