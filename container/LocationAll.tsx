import React, { useEffect } from 'react';
import AOS from 'aos';
import { Container, Row, Col, Carousel, Button, Image, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import Link from 'next/link';
const LocationAll: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="location mt-5 mb-5 text-center">
            <Image className="img-fluid bg-white p-3 w-100" src="images/map.png" alt="" />
        </div>
    );
};

export default LocationAll;
