import React from "react";
import {Carousel} from "react-bootstrap";
import Banner1 from "../../assets/images/banners/banner.jpg";
import Banner2 from "../../assets/images/banners/banner2.jpg";
import Banner3 from "../../assets/images/banners/banner3.jpg";
import Banner1s from "../../assets/images/banners/banner-s.jpg";
import Banner2s from "../../assets/images/banners/banner-s2.jpg";
import Banner3s from "../../assets/images/banners/banner-s3.jpg";

function Welcome() {
    return (
        <div className="m-0 p-0">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-none d-sm-block w-100"
                        src={Banner1}
                        alt="First slide"
                    />
                    <img
                        className="d-block d-sm-none w-100"
                        src={Banner1s}
                        alt="First slide"
                    />
                    <Carousel.Caption className="d-none d-sm-block">
                        <h3>100% Quality products</h3>
                        <h2>All products on same place</h2>
                        <h3>Small Changes Big Difference</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-none d-sm-block w-100"
                        src={Banner2}
                        alt="Third slide"
                    />
                    <img
                        className="d-block d-sm-none w-100"
                        src={Banner2s}
                        alt="First slide"
                    />
                    <Carousel.Caption className="d-none d-sm-block">
                        <h3>100% Healthy & Affordable</h3>
                        <h2>Snacks & bakery products</h2>
                        <h3>Small Changes Big Difference</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-none d-sm-block w-100"
                        src={Banner3}
                        alt="Third slide"
                    />
                    <img
                        className="d-block w-100 d-sm-none"
                        src={Banner3s}
                        alt="First slide"
                    />

                    <Carousel.Caption className="d-none d-sm-block">
                        <h3>100% Healthy & Affordable</h3>
                        <h2>Organic Vegetables</h2>
                        <h3>Small Changes Big Difference</h3>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}
export default Welcome;
