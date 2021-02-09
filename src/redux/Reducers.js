import { combineReducers } from "redux";
import settings from './settings/Reducer';
import animals from '../redux/settings/reducers/animal-reducer'

const Reducers = combineReducers({
  settings,
  animals,
});

export default Reducers;