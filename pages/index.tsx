import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import requests from '../utils/requests'

const Home = ({ netflixOriginals }) => {
  return (
      // 10 means 0.1 alpha value 
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:[140vh]">
        <Head>
            <title>Netflix | Home</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Header />
        <main>
            <Banner />
        </main>
        
    
    
    </div>
  )
}

export default Home


// Server Side rendering
export const getServerSideProps = async () => {
    const  [
        netflixOriginals,
        trendingNow,
        topRated,
        actionsMovies,
        comedyMovies,
        horrorMovies,
        romanceMovies,
        documentaries,
    ] = await Promise.all ([
        fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
        fetch(requests.fetchTrending).then((res) => res.json()),
        fetch(requests.fetchTopRated).then((res) => res.json()),
        fetch(requests.fetchActionMovies).then((res) => res.json()),
        fetch(requests.fetchComedyMovies).then((res) => res.json()),
        fetch(requests.fetchHorrorMovies).then((res) => res.json()),
        fetch(requests.fetchRomanceMovies).then((res) => res.json()),
        fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    ])

    return {
        props: {
            netflixOriginals: netflixOriginals.results,
            trendingNow:      trendingNow.results,
            topRated:         topRated.results,
            actionsMovies:    actionsMovies.results,
            comedyMovies:     comedyMovies.results,
            horrorMovies:     horrorMovies.results,
            romanceMovies:    romanceMovies.results,
            documentaries:    documentaries.results,
        }
    }
}