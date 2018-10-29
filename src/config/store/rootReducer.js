import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import fileWindowReducer from '../../Components/Main/FileWindow/reducer';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  window: fileWindowReducer,
});
