import { Link, Outlet } from "react-router-dom";
import './navigation.styles.scss'
import { Fragment } from "react";
import Banner from "../../components/banner/banner.component";

const Navigation = () => {
    return (
        <Fragment>
            
            
            <div className="navigation">
                <div className="navigation-bar">
                    <Link className="navigation-link" to={'/shop'}>SHOP</Link>
                    <Link className="navigation-link" to={'/visit-us'}>VISIT US</Link>
                    <Link className="navigation-link" to={'/explore'}>EXPLORE</Link>
                </div>

                <div className="navigation-operations">
                    <Link className="navigation-link book-btn" to={'/book-table'}>BOOK A TABLE</Link>
                    <Link className="navigation-link navigation-icon" to={'/search'}><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></Link>
                    <Link className="navigation-link navigation-icon" to={'/shopping-bag'}><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg></Link>
                    <Link className="navigation-link navigation-icon" to={'/log-in'}><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg></Link>
                </div>
            </div>
            
            <Outlet />

        </Fragment>


    )


}

export default Navigation;