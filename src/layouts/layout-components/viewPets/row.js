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
  Col,
} from 'reactstrap';
import logo from '../../../assets/logos/logo.png';
import { Auth } from '../../../firebase/firebase';
import saveNewPet from '../../../firebase/database/saved-pets';

const Rows = props => {
  const showAnimals = () => {
    let filteredForSpecies =
      props.pets.species !== ''
        ? props.pets.results.animals.filter(animal => {
            return animal.species === props.pets.species;
          })
        : props.pets.results.animals;

    let filteredForAge =
      props.pets.age !== ''
        ? filteredForSpecies.filter(animal => {
            return animal.age === props.pets.age;
          })
        : filteredForSpecies;

    let filteredForGender =
      props.pets.gender !== ''
        ? filteredForAge.filter(animal => {
            return animal.gender === props.pets.gender;
          })
        : filteredForAge;

    let filteredForEnvironment =
      props.pets.environment !== ''
        ? filteredForGender.filter(animal => {
            for (let kvp in animal.environment) {
              if (kvp === props.pets.environment) {
                if (animal.environment[kvp] == true) {
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


  return (
    <Row>
      {props.pets.results
        ? showAnimals().map(animal => (
            <Col xs="12" md="4">
              <Card>
                {animal.photos.length > 0 ? (
                  <CardImg top width="100%" src={animal.photos[0].full} />
                ) : (
                  <CardImg top width="100%" src={logo} />
                )}
                <CardBody>
                  <CardTitle>Name: {animal.name}</CardTitle>
                  <CardSubtitle>Species: {animal.species}</CardSubtitle>
                  <CardSubtitle>Breed: {animal.breeds.primary} </CardSubtitle>
                  <CardSubtitle>
                    Location: {animal.contact.address.city},{' '}
                    {animal.contact.address.state}{' '}
                  </CardSubtitle>
                  <CardText>Description: {animal.description}</CardText>
                  {animal.contact.email ? (
                    <Button
                      style={{
                        width: '120px',
                        height: '50px',
                        lineHeight: '40px',
                        margin: '0 10px 0 0',
                        color: 'white',
                      }}
                      href={`mailto: ${animal.contact.email}?subject=${animal.name}`}
                    >
                      Email Shelter
                    </Button>
                  ) : (
                    ''
                  )}
                  <Button
                    onClick={() => saveAnimalToFavorites(animal)}
                    style={{
                      width: '120px',
                      height: '50px',
                      margin: '10px 10px 10px 0px',
                    }}
                  >
                    Add To favorites
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))
        : ''}
    </Row>
  );
};

export default Rows;
