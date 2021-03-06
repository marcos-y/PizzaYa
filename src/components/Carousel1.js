import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel1.css'
import img1 from './pizza_hut.jpg';
import img2 from './pizzada.png';
import img3 from './dominos.png';

const Carousel1 = () => {

    return (
        <>
        <div className="Carousel1">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1} 
                        alt=""
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2} 
                        alt=""
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt=""
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </>
    )
}

export default Carousel1;