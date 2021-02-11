import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col
} from 'reactstrap';
import logo from '../../../assets/logos/logo.png';
import { Auth } from '../../../firebase/firebase';
import saveNewPet from '../../../firebase/database/saved-pets';


const Rows = (props) => {
    console.log("Props within the Row component: ", props.pets);
    console.log("Props.results within the Row component: ", props.pets.results);

    const showAnimals = () => {
        console.log('props.pets.species&&&&&&', props.pets)
        // console.log("###333333333", props.pets.results.animals)
    let filteredForSpecies = props.pets.species !== '' ? props.pets.results.animals.filter(animal => {
        return animal.species === props.pets.species;
    })
    : props.pets.results.animals;

    let filteredForAge = props.pets.age !== '' ? filteredForSpecies.filter(animal => {
        return animal.age === props.pets.age;
    })
    : filteredForSpecies;
   
    let filteredForGender = props.pets.gender !== '' ? filteredForAge.filter(animal => {
        return animal.gender === props.pets.gender;
    }) 
    : filteredForAge;

    
    let filteredForEnvironment = props.pets.environment !== '' ? filteredForGender.filter(animal => {
        for(let kvp in animal.environment){
            if(kvp === props.pets.environment){
              if(animal.environment[kvp] == true){
                return animal;    
              }
            }
        }
    })
    : filteredForGender;
    return filteredForEnvironment;
    }

    const saveAnimalToFavorites = (animal) => {
        if(Auth.currentUser) {
          saveNewPet(Auth.currentUser.uid, animal);
        } else {
            alert('Please sign in.')
        }
    }


    return(
    <Row>
        {props.pets.results ? 
        (showAnimals().map(animal => (
            <Col xs="12" md="4">
        
                        <Card >
                            {animal.photos.length > 0 ? 
                          
                            <CardImg top width="100%" src={animal.photos[0].full} />                          
                            : <CardImg top width="100%" src={logo} />
                            }


                            <CardBody style={{overflow: "scroll"}}>
                                <CardTitle>Name: {animal.name}</CardTitle>
                                <CardSubtitle>Species: {animal.species}</CardSubtitle>
                                <CardSubtitle>Breed: {animal.breeds.primary} </CardSubtitle>
                                <CardSubtitle>Location: {animal.contact.address.city}, {animal.contact.address.state} </CardSubtitle>
                                <CardText>Description: {animal.description}</CardText>
                                <Button href="mailto:someone@yoursite.com">Contact Shelter</Button> 
                                <Button onClick={() => saveAnimalToFavorites(animal)}>Add To favorites</Button>
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