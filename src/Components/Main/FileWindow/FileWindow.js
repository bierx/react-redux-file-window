import React, { Component } from "react";
import { reduxForm } from "redux-form";
import "../../../Styles/main.css";

import Paper from "@material-ui/core/Paper";

import FoldersTree from "../FoldersTree/FoldersTree";
import WindowElement from "./WindowElement";
import WindowFolder from "./WindowFolder";

class FileWindow extends Component {
  constructor(props) {
    super(props);

    this.onSelectFolder = this.onSelectFolder.bind(this);
    this.selectElement = this.selectElement.bind(this);

    this.state = {};
  }

  onSelectFolder(folder, parentFolderToken) {
  
    this.setState({
      ...this.state,
      selectedFolder: { ...folder }
    });

    if (this.props.onFolderSelect) this.props.onFolderSelect(folder, parentFolderToken);
  }

  selectElement(element) {
    this.setState({
      ...this.state,
      selectedElement: { ...element }
    });

    if (this.props.onSelectElement) this.props.onSelectElement(element);
  }

  render() {
    const { data, selectedFoldersMap } = this.props;

    return (
      <div>
        <Paper>
          <div className="file-window-container">
            <FoldersTree selectedFoldersMap={selectedFoldersMap} onFolderSelect={this.onSelectFolder} data={data} />
            <div className="file-window">
              {this.state.selectedFolder &&
                this.state.selectedFolder.folders &&
                this.state.selectedFolder.folders.map(element => (
                  <WindowFolder parentFolderToken={this.state.selectedFolder.token} onSelectFolder={this.onSelectFolder} key={element.token} element={element} />
                ))}
              {this.state.selectedFolder &&
                this.state.selectedFolder.elements &&
                this.state.selectedFolder.elements.map(element => (
                  <WindowElement onSelectElement={this.selectElement} key={element.token} element={element} />
                ))}
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default reduxForm({
  form: "FileWindow"
})(FileWindow);
