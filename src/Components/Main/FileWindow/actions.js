import { handleActions } from 'redux-actions';

const defaultState = {};
const reducer = handleActions(defaultState);

export function buildSelectedFoldersMap(selected, parentFolderToken, fromWindow) {
  return function(dispatch) {
    dispatch({
      type: 'BUILD_OPENED_FOLDERS_MAP',
      payload: { selected, parentFolderToken, fromWindow }
    });
  };
}

export function selectFolder(folder) {
    return function(dispatch) {
      dispatch({
        type: 'SELECT_FOLDER',
        payload: { folder }
      });
    };
  }



export default reducer;
