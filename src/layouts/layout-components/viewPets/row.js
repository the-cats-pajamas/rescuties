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
import logo from '../../../assets/logos/logo.png';


const Rows = (props) => {
    console.log("Props within the Row component: ", props.pets);
    console.log("Props.results within the Row component: ", props.pets.results);

    return(
    <Row>
        {props.pets.results ? 
        (props.pets.results.animals.map(animal => (
            <Col xs="12" md="4">
        
                        <Card>
                            {animal.photos.length > 0 ? 
                          
                            <CardImg top width="100%" src={animal.photos[0].small} />                          
                            : <CardImg top width="100%" src={logo} />
                            }


                            <CardBody>
                                <CardTitle>Name: {animal.name}</CardTitle>
                                <CardSubtitle>Species: {animal.species}</CardSubtitle>
                                <CardSubtitle>Breed: {animal.breeds.primary} </CardSubtitle>
                                <CardSubtitle>Location: {animal.contact.address.city}, {animal.contact.address.state} </CardSubtitle>
                                <CardText>Description: {animal.description}</CardText>
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