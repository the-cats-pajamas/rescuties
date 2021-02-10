import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {get} from '../../../redux/settings/reducers/animal-reducer'
import ViewRow from './row.js';

const mapDispatchToProps = {get} 

const Cards = (props) => {
    console.log('Here are ALL the props', props);
    console.log('Here are the props from the animal reducer:', props.animals);


    const rows = [[]];
    props.animals.forEach(animal => {
        if(rows[rows.length - 1].length === 3){
            rows.push([]);

        }
        rows[rows.length - 1].push(animal)
            
    })
    console.log("Rows!!!!!", rows);

    
    useEffect(() => {
        props.get();
      }, []);

    return (
        <div>
            <h5 className="mb-3">Basic Cards</h5>
            { rows.map((pet, i) => {
                return <ViewRow
                pets={props.animals}
                animals = {rows[i]} />
            })}
            
        </div>
    );
}

const mapStateToProps = state => ({
    animals: state.animals.animals,
});
export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(Cards);

