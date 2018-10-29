import { handleActions } from "redux-actions";

const defaultState = {
  selectedFoldersMap: [],
  selectedFolder: {}
};

const reducer = handleActions(
  {
    BUILD_OPENED_FOLDERS_MAP: (state, { payload: { selected, parentFolderToken, fromWindow } }) => {
      function buildOpenedFoldersMap() {
        if (fromWindow || (parentFolderToken && !state.selectedFoldersMap.includes(parentFolderToken)))
          return [
            ...state,
            ...state.selectedFoldersMap.filter(folder => folder !== selected.token),
            ...[selected.token, parentFolderToken]
          ];
        else if (state.selectedFoldersMap.includes(selected.token))
          return [...state.selectedFoldersMap.filter(folder => folder !== selected.token)];

        return [...state.selectedFoldersMap, selected.token];
      }
      return {
        ...state,
        selectedFoldersMap: buildOpenedFoldersMap()
      };
    },
    SELECT_FOLDER: (state, { payload: { folder } }) => {
     
      return {
        ...state,
        selectedFolder: {...folder}
      };
    }
  },

  defaultState
);

export default reducer;
