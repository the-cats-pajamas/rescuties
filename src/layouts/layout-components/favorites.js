import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Button from 'import { BrowserRouter as Router, Switch, Route } from "react-router-dom";';
import { addAnimal, deleteAnimal, getAction, showAll, addToFavorites } from '../../redux/settings/Action';



const Favorites = (props) => {

  let clickHandler = (animal) => {
    console.log(animal);
    props.addToFavorites(animal)
  }

  const load = () => {
    props.getAction()
  }

  useEffect(load, [])
  
  console.log(props.favorites)
    return (
        <div>
          {/* {props.favorites.favorites ? props.favorites.favorites.map((animal, idx) => (
            key={idx}
              {animal.name}
              <Button onClick={() => {
                clickHandler(animal)
            }}>Remove From Favorites</Button>
            

          )}
        :
        null
        }
            {/* <Typography variant="h5"> */}
                 */}
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