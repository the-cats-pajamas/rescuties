import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    UncontrolledCarousel,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';

import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';

const items = [
    {
        'altText': 'Slide 1',
        'caption': 'Slide 1',
        'src': img1
    },
    {
        'altText': 'Slide 2',
        'caption': 'Slide 2',
        'src': img2
    },
    {
        'altText': 'Slide 3',
        'caption': 'Slide 3',
        'src': img3
    }
];

const CarouselComponent = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map(item => (
        <CarouselItem
            className="custom-tag"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
            <img className="w-100" src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
    ));

    return <div>
        <style>
            {
                `.custom-tag {
                max-width: 100%;
                height: 400px;
              }`
            }
        </style>
        {/* --------------------------------------------------------------------------------*/}
        {/* Start Inner Div*/}
        {/* --------------------------------------------------------------------------------*/}
        <Row>
            <Col xs="12" md="12">
                {/* --------------------------------------------------------------------------------*/}
                {/* Cariusel-1*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card>
                    <CardBody>
                        <CardTitle className="mb-3">Carousel</CardTitle>
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>
                    </CardBody>
                </Card>
            </Col>
            <Col xs="12" md="12">
                {/* --------------------------------------------------------------------------------*/}
                {/* Cariusel-2*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card>
                    <CardBody>
                        <CardTitle className="mb-3">Uncontrolled Carousel</CardTitle>
                        <UncontrolledCarousel items={items} />
                    </CardBody>
                </Card>
            </Col>
        </Row>
        {/* --------------------------------------------------------------------------------*/}
        {/* End Inner Div*/}
        {/* --------------------------------------------------------------------------------*/}
    </div>;

}

export default CarouselComponent;


