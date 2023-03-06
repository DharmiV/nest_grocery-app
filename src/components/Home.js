import React from "react";
import '../style.css';
const logo = 'images/logo.png';
const cover='images/coverimg.jpg';
const apple='images/apple.png';
const snack='images/snack.png';
const vegetables='images/vegetables.png';
const strawberry='images/strawberry.png';
const blackplum='images/blackplum.png';
const custardapple='images/custardapple.png';
const coffeetea='images/coffeetea.png';
const headphone='images/headphone.png';
const cakemilk='images/cakemilk.png';
const organickiwi='images/organickiwi.png';

function Home(){
    return(
        <>
        {/* Header */}
        <div className="container-fluid">
            {/* Top-Header */}
                <div className="row" id="toprow">

                    <div className="col-4">
                    <a href="#" className="a">About Us</a>
                    <a href="#" className="a">MyAccount</a>
                    <a href="#" className="a">Wishlist</a>
                    <a href="#" className="a">OrderTracking</a>
                    </div>

                    <div className="col-4">
                    Get great devices upto 50% Off 
                    <a href="#"> View Details</a>
                    </div>


                    <div className="col-4">
                        <div className="row">
                            <div className="col-6">
                            Need Help?Call Us
                            <a href="#" className="b">+1800 900</a>
                            </div>

                            <div className="col-3">
                                <select className="form-select form-select-sm" id="language">
                                    <option selected>English</option>
                                    <option>Hindi</option>
                                    <option>Gujarati</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <select className="form-select form-select-sm" id="currency">
                                    <option selected>USD</option>
                                    <option>Euro</option>
                                    <option>Rupees</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        <hr/>

            {/* Bottom-Header */}
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid" id="middlerow">

                        {/* <a className="navbar-brand" href="#">Navbar</a> */}
                        <img src={logo} alt="logo" className="logo" />

                        <form className="d-flex input-group" role="search">
                            {/* <span className="input-group-text" id="allcategory">All Categories</span>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                             <span class="input-group-text">.00</span>
                            <button className="btn btn-outline-success" type="submit">Search</button> */}

                            <span class="input-group-text" id="allcategory">All Categories</span>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <span class="input-group-text" id="searchicon"><i class="bi bi-search"/></span>
                        </form>

                        {/* <div className="input-group w-50">
                        <span className="input-group-text" id="allcategory">All Categories</span>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        </div> */}

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    
                        <span className="navbar-text">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdown">
                                        Your Location
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Rajkot</a></li>
                                        <li><a className="dropdown-item" href="#">Ahmedabad</a></li>
                                        <li><a className="dropdown-item" href="#">Surat</a></li>
                                    </ul>
                                    </li>

                                    <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="bi bi-recycle" id="recycle"/> Compare</a>
                                    </li>

                                    <li className="nav-item">
                                    <a className="nav-link" href="#"><i class="bi bi-heart"></i> Wishlist</a>
                                    </li>
                                    
                                    <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="bi bi-cart"></i> Cart</a>
                                    </li>

                                    <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="bi bi-person"></i> Account</a>
                                    </li>

                                </ul>
                            </div>
                        </span>
                    </div>
                </nav>
            <hr/>
            

            <div className="container-fluid">
                <div className="row" id="bottomrow">

                    <div className="col" id="categories">
                        <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Browse All Categories
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <div className="col mt-2" id="hotdeals">
                    <a href="#" >Hot Deals</a>
                    </div>
                    
                    <div className="col" id="home">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Home
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <div className="col mt-2" id="about">
                    <a href="#" >About</a>
                    </div>

                    <div className="col" id="shop">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Shop
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <div className="col" id="vendors">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Vendors
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <div className="col" id="megamenu">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Mega Menu
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <div className="col" id="blog">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Blog
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <div className="col" id="pages">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Pages
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <div className="col mt-2" id="contact">
                    <a href="#" >Contact</a>
                    </div>

                    <div className="col">
                    </div>
                </div>
            </div>
        <hr/>

        <img src={cover} class="img-fluid align-middle" alt="coverimage" id="coverimg"></img>

        <div className="row" id="fcategory">
            <div className="col-3">
                <h4>Featured Categories</h4>
            </div>
            <div className="col-9" id="categoryrow">
                <a href="#" className="a">Cake & Milk</a>
                <a href="#" className="a">Coffee & Tea</a>
                <a href="#" className="a">Pet Foods</a>
                <a href="#" className="a">Vegetables</a>
            </div>
        </div>

        <div className="container-fluid" id="categoryitems">
            <div className="row">
            <div class="col">
                <div class="card h-80" id="apple">
                <img src={apple} class="card-img-top" alt="apple"/>
                <div class="card-body">
                    <p class="card-title">Red Apple</p>
                    <p class="card-text">26 items</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-80" id="snack">
                <img src={snack} class="card-img-top" alt="snack"/>
                <div class="card-body">
                    <p class="card-title">Snack</p>
                    <p class="card-text">26 items</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-80" id="vegetables">
                <img src={vegetables} class="card-img-top" alt="vegetables"/>
                <div class="card-body">
                    <p class="card-title">Vegetables</p>
                    <p class="card-text">26 items</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-80" id="strawberry">
                <img src={strawberry} class="card-img-top" alt="strawberry"/>
                <div class="card-body">
                    <p class="card-title">Strawberry</p>
                    <p class="card-text">26 items</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-80" id="blackplum">
                <img src={blackplum} class="card-img-top" alt="blackplum"/>
                <div class="card-body">
                    <p class="card-title">Black plum</p>
                    <p class="card-text">26 items</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-80" id="custardapple">
                <img src={custardapple} class="card-img-top" alt="custardapple"/>
                <div class="card-body">
                    <p class="card-title">Custardapple</p>
                    <p class="card-text">26 items</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-80" id="coffeetea">
                <img src={coffeetea} class="card-img-top" alt="coffeetea"/>
                <div class="card-body">
                    <p class="card-title">Coffee & Tea</p>
                    <p class="card-text">26 items</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-80" id="headphone">
                <img src={headphone} class="card-img-top" alt="headphone"/>
                <div class="card-body">
                    <p class="card-title">Headphone</p>
                    <p class="card-text">26 items</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-80" id="cakemilk">
                <img src={cakemilk} class="card-img-top" alt="cakemilk"/>
                <div class="card-body">
                    <p class="card-title">Cake & Milk</p>
                    <p class="card-text">26 items</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-80" id="organickiwi">
                <img src={organickiwi} class="card-img-top" alt="organickiwi"/>
                <div class="card-body">
                    <p class="card-title">Organic Kiwi</p>
                    <p class="card-text">26 items</p>
                </div>
                </div>
            </div>


            </div>
        </div>
        </>
    )
}
export default Home;