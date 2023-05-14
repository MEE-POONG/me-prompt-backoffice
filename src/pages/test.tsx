import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
type checkSlide = {
    asNavFor: string;
};
const AsNavFor: React.FC<checkSlide> = () => {
    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <FaArrowRight />,
        prevArrow: <FaArrowLeft />,
    };

    const settings2: Settings = {
        ...settings,
        slidesToShow: 1,
        swipeToSlide: true,
        focusOnSelect: true,
    };

    const createSlides = () =>
        Array(20)
            .fill(null)
            .map((_, index) => (
                <div key={index} className="p-1">
                    <img src={`/images/gallery${index + 1}.jpg`} alt={`Image-${index + 1}`} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                </div>
            ));

    return (
        <div>
            <Container >
                <Slider {...settings2} asNavFor={nav1} ref={(slider) => setNav2(slider)}>
                    {createSlides()}
                </Slider>
                <Slider {...settings} asNavFor={nav2} ref={(slider) => setNav1(slider)}>
                    {createSlides()}
                </Slider>
            </Container>

        </div>
    );
};

export default AsNavFor;
