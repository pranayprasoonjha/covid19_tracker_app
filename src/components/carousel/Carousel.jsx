import React from 'react';

import carousel1 from '../../images/carousel1.jpg';
import carousel2 from '../../images/carousel2.jpg';
import carousel3 from '../../images/carousel3.jpg';


import './Carousel.css'
const Carousel = () => {

    

    return (
        <div >
        <div id="car1" className="carousel slide" data-ride="carousel" data-interval="2500">

            <ul className="carousel-indicators">
                <li data-target="#car1" data-slide-to="0" className="active"></li>
                <li data-target="#car1" data-slide-to="1"></li>
                <li data-target="#car1" data-slide-to="2"></li>
               
            </ul>

            
            <div className="carousel-inner ">
                <div className="carousel-item active">
                    <img src={carousel3} alt='1'/>
                    <div className="carousel-caption " >
                        <h1 className ='display-2'>COVID-19</h1>
                        <h3 >Stay Home Stay Safe</h3>
                        <div className="bton">
                            <button type="button" className="btn btn-outline-light btn-lg">
                                Check Health
                            </button>
                            

                            <button type="button" className="btn btn-primary btn-lg" onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf';
                            }}
                            > Need Help ?</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={carousel1} alt='2' />
                </div>
                <div className="carousel-item">
                    <img src={carousel2} alt='3' />
                </div>
                
            </div>
            <div id="control">
                <a className="carousel-control-prev" href="#car1" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#car1" data-slide="next">
                <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>

    </div>
            
    );
}

export default Carousel;