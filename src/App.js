import React, { Component } from "react";
import FileWindow from "./Components/Main/FileWindow/FileWindowContainer";
import { getFolders } from "./Services/DirectoriesServices";

class App extends Component {
  constructor(props) {
    super(props);

    this.applySelectedElement = this.applySelectedElement.bind(this);

    this.state = {
      allFolders: getFolders(),
    };
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
        <div className="App">
          <FileWindow
            onSelectElement={this.applySelectedElement}
            data={this.state.allFolders}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
