import { Fragment } from 'react';
import Banner from '../../components/banner/banner.component';
import homeImage from '../../images/Restaurant-3.jpg';

const Home = () => {
    return (
        <Fragment>
            <img className='home-image' src={homeImage} alt="Caravan Restaurant" />
            <Banner />
        </Fragment>

    )
}
export default Home