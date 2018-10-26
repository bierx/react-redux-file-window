import React, { Component } from "react";
import FileWindow from "./Components/Main/FileWindow/FileWindow";
import { getFolders } from "./Services/DirectoriesServices";

class App extends Component {
  constructor(props) {
    super(props);

    this.applySelectedFolder = this.applySelectedFolder.bind(this);
    this.applySelectedElement = this.applySelectedElement.bind(this);
    this.buildSelectedFoldersMap = this.buildSelectedFoldersMap.bind(this);

    this.state = {
      allFolders: getFolders(),
      selectedFoldersMap: []
    };
  }

  buildSelectedFoldersMap(selected, parentFolderToken) {
    if (parentFolderToken && !this.state.selectedFoldersMap.includes(parentFolderToken)) {
      return [...this.state.selectedFoldersMap, ...[selected.token, parentFolderToken]];
    } else if (this.state.selectedFoldersMap.includes(selected.token))
      return [...this.state.selectedFoldersMap.filter(folder => folder !== selected.token)];

    return [...this.state.selectedFoldersMap, selected.token];
  }

  applySelectedFolder(selected, parentFolderToken) {
    this.setState({
      ...this.state,
      currentFodler: selected,
      selectedFoldersMap: this.buildSelectedFoldersMap(selected, parentFolderToken)
    });
  }

  applySelectedElement(selected) {
    this.setState({
      ...this.state,
      selectedElement: selected
    });
  }

  render() {
    return (
      <React.Fragment>
        {/* {this.state.currentFodler && <p>current fodler name: {this.state.currentFodler.name}</p>} */}
        <div className="App">
          <FileWindow
            onSelectElement={this.applySelectedElement}
            onFolderSelect={this.applySelectedFolder}
            selectedFoldersMap={this.state.selectedFoldersMap}
            data={this.state.allFolders}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
