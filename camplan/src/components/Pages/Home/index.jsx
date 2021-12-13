import { Footer, Header, HomeMain } from '../../index';
import { useContext } from 'react';
import './index.scss'

const Home = () => {
    
    return(
        <>
            <Header />
            <HomeMain />
            <Footer />
        </>
    )
}

export default Home;