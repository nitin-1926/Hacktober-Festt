import React from 'react';
import Row from '../Row/Row';
import requests from '../../common/requests';

const Body = () => {
    return (
        <div>
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
            <Row title='Top rated' fetchUrl={requests.fetchTopRated} />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='Romantic Movies' fetchUrl={requests.fetchRomanticMovies}/>
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}

export default Body;
