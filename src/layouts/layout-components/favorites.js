import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
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
import { addAnimal, deleteAnimal, getAction, showAll, addToFavorites } from '../../redux/settings/Action';
import {Auth, database} from '../../firebase/firebase'




const Favorites = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [keys, setKeys] = useState([])

  const deleteFave = (e) => {
    let petId = keys[e.target.value];
    console.log('petID', petId);
    if(Auth.currentUser) {
      let id = Auth.currentUser.uid;
      let dbRef = database.ref('savedPets/'+ id);
      dbRef.child(petId).remove();
    }
  }


  const getFaves = () => {
    let catchPets = [];
    let catchKeys = [];
    if(Auth.currentUser) {
      let id = Auth.currentUser.uid;
      let dbRef = database.ref().child('savedPets/'+ id)
      dbRef.on('value', snapshot => { 
        for(let key in snapshot.val()) {
          catchKeys.push(key);
          catchPets.push(snapshot.val()[key]);
        }
        setKeys(catchKeys);
        setFavorites(catchPets);
      })  
      console.log('favorites is now',favorites);
    }
  }

  useEffect(getFaves, [])
  
  console.log(props.favorites)
    return (
        <div>
          {favorites.map((pet, idx) => (
            <Col xs="12" md="4">
            <Card> 
                <CardBody style={{overflow: "scroll"}}>
                    <CardTitle>Name: {pet.name}</CardTitle>
                    <CardSubtitle>Species: {pet.species}</CardSubtitle>
                    <CardSubtitle>Breed: {pet.breed} </CardSubtitle>
                    <CardSubtitle>Location: {pet.city}, {pet.state} </CardSubtitle>
                    <CardText>Description: {pet.description}</CardText>
                    <Button value={idx} onClick={deleteFave}>Remove</Button>
                </CardBody>
            </Card>
          </Col>
          ))

          }
          
        </div>  

        
    );
} 

const mapStateToProps = state => {
  return {

    // characters: state.characters.all,
    favorites: state.favorites,

    
  }
}

const mapDispatchToProps = dispatch => ({
  addAnimal: (name) => {
    dispatch(addAnimal(name))
  },
  showAll: (animal) => {
    dispatch(showAll(animal))
  },
  deleteAnimal: (name) => {
    dispatch(deleteAnimal(name))
  },
  getAction: () => {
    dispatch(getAction())
  },
  addToFavorites: (name) => {
    dispatch(addToFavorites(name))
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);