import { combineReducers } from "redux";
import settings from './settings/Reducer';
import animals from '../redux/settings/Reducer'

const Reducers = combineReducers({
  settings,
  animals,
});

export default Reducers;