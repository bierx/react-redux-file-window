import { connect } from 'react-redux';

import FileWindow from './FileWindow';

import * as actions from './actions';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  selectedFoldersMap: state.window.selectedFoldersMap,
  selectedFolder: state.window.selectedFolder
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  buildSelectedFoldersMap: (selected, parentFolderToken, fromWindow) => dispatch(actions.buildSelectedFoldersMap(selected, parentFolderToken, fromWindow)),
  onFolderSelect: (folder) => dispatch(actions.selectFolder(folder)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileWindow);
