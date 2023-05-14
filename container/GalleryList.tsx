import React, { FC, Component, useState, useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider, { CustomArrowProps } from "react-slick";

const GalleryList: React.FC = () => {
    const [nav1, setNav1] = useState<Slider | undefined>(undefined);
    const [nav2, setNav2] = useState<Slider | undefined>(undefined);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <FaArrowRight />,
        prevArrow: <FaArrowLeft />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        nextArrow: <FaArrowRight />,
        prevArrow: <FaArrowLeft />,
        slidesToShow: 1,
        swipeToSlide: true,
        focusOnSelect: true,
    };
    const createSlides = () =>
        Array(20)
            .fill(null)
            .map((_, index) => (
                <div key={index} className="p-1">
                    <img src={`/images/gallery${index + 1}.jpg`} alt={`Image-${index + 1}`} style={{ width: '100%', objectFit: 'cover' }} />
                </div>
            ));
    const images = Array(20).fill(null).map((_, index) => `/images/gallery${index + 1}.jpg`);
    return (
        <div className="gallery-show mt-5 ">
            <Container>
                <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
                    <p className="text-primary text-uppercase mb-2">Our Gallery</p>
                    <h1 className="display-6 mb-4 text-backblue">Overview of the Building</h1>
                </div>
                <Slider {...settings2} asNavFor={nav1} ref={(slider: any) => setNav2(slider)} className="show mx-4">
                    {createSlides()}
                </Slider>
                <Slider {...settings} asNavFor={nav2} ref={(slider: any) => setNav1(slider)} className="select mx-4">
                    {createSlides()}
                </Slider>
            </Container>
        </div>
    );
}

export default GalleryList;
