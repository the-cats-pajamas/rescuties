import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get } from '../../../redux/settings/reducers/animal-reducer';
import ViewRow from './row.js';
import FilterButtons from '../filterResults/filterButtons';

const mapDispatchToProps = { get };

const Cards = props => {


  console.log('Here are ALL the props', props);
  console.log('Here are the props from the animal reducer:', props.animals);
  console.log('HERE ARE THE ANIMALS:', props.animals.results);

  useEffect(() => {
    props.get();
  }, []);

  const rows = [[]];

  return (
    <div>
      <h5 className="mb-3">Search Adoptable Pets</h5>
      <FilterButtons 
      pets={props.animals} 
      style={ {margin: ''} } />
      {rows.map((pet, i) => {
        return <ViewRow pets={props.animals} key={i} animals={rows[i]} />;
      })}

    </div>
  );
};

const mapStateToProps = state => ({
  animals: state.animals
});
export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(Cards);
