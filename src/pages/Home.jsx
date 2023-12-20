
// import PropTypes from 'prop-types';

import Products from "./Products";
import Banner from "./Banner";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

Home.propTypes = {

};

export default Home;