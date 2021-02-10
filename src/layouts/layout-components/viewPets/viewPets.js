import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get } from '../../../redux/settings/reducers/animal-reducer';
import ViewRow from './row.js';

const mapDispatchToProps = { get };

const Cards = props => {
  console.log('Here are ALL the props', props);
  console.log('Here are the props from the animal reducer:', props.animals);
  console.log('HERE ARE THE ANIMALS:', props.animals.results);

  useEffect(() => {
    props.get();
  }, []);

  const rows = [[]];

//   const addRows = props.animals => {
//     props.animals.length > 0
//       ? props.animals.forEach(animal => {
//           if (rows[rows.length - 1].length === 3) {
//             rows.push([]);
//           }
//           rows[rows.length - 1].push(animal);
//         })
//       : '';
//   };

//   addRows(props.animals);

//   console.log('Rows!!!!!', rows);

  return (
    <div>
      <h5 className="mb-3">Basic Cards</h5>
      {rows.map((pet, i) => {
        return <ViewRow pets={props.animals} animals={rows[i]} />;
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
