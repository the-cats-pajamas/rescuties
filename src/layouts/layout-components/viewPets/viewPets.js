import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get } from '../../../redux/settings/reducers/animal-reducer';
import ViewRow from './row.js';

const mapDispatchToProps = { get };

const Cards = props => {

  // const [petUrl, setpetUrl] = useState("https://www.petfinder.com/dog/willow-50513060/in/fort-wayne/perfect-paws-pet-rescue-inc-in267/?referrer_id=fe654437-6639-46f9-9ea6-4e29ce44cbb3");

  // const loadImage= () => {
  //   setpetUrl(petUrl)
  // }

  console.log('Here are ALL the props', props);
  console.log('Here are the props from the animal reducer:', props.animals);
  console.log('HERE ARE THE ANIMALS:', props.animals.results);

  useEffect(() => {
    props.get();
  }, []);

  const rows = [[]];

  return (
    <div>
      <h5 className="mb-3">Basic Cards</h5>
      {rows.map((pet, i) => {
        return <ViewRow pets={props.animals} key={i} animals={rows[i]} />;
      })}
      {/* <img src={petUrl}></img> */}

    </div>
  );
};

const mapStateToProps = state => ({
  animals: state.animals
});
export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(Cards);
