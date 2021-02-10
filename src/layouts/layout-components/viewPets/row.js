import React from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
} from 'reactstrap';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

const Rows = (props) => {
    console.log("Pets!!!", props.pets);
    return(
    <Row>
    {props.animals.map(animal => {
        return <Col xs="12" md="4">
    
                    <Card>
                        <CardImg top width="100%" src={img1} />
                        <CardBody>
                            <CardTitle>Name</CardTitle>
                            <CardSubtitle>Species: </CardSubtitle>
                            <CardSubtitle>Breed: </CardSubtitle>
                            <CardSubtitle>Location: </CardSubtitle>
                            <CardText>Description: </CardText>
                            <Button>Contact Shelter</Button>
                        </CardBody>
                    </Card>
                </Col>

    })}
            </Row>
            )
}

export default Rows;