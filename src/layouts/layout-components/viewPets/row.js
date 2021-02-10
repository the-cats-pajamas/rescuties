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
    console.log("Props within the Row component: ", props.pets);
    console.log("Props.results within the Row component: ", props.pets.results);

    return(
    <Row>
        {props.pets.results ? 
        (props.pets.results.animals.map(animal => (
            <Col xs="12" md="4">
        
                        <Card>
                            <CardImg top width="100%" src={animal.photos[0]} />
                            <CardBody>
                                <CardTitle>{animal.name}</CardTitle>
                                <CardSubtitle>{animal.species}</CardSubtitle>
                                <CardSubtitle>{animal.breed} </CardSubtitle>
                                {/* <CardSubtitle>Location: </CardSubtitle> */}
                                <CardText>{animal.description}</CardText>
                                <Button>Contact Shelter</Button>
                            </CardBody>
                        </Card>
                    </Col>
        )))
     : ''
    }
            </Row>
            )
}

export default Rows;