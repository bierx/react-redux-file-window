import React, { Component } from "react";
import { Field } from "redux-form";
import "../../../Styles/main.css";

import Icon from "react-icons-kit";
import { folder as folderClosed } from "react-icons-kit/fa/folder";
import { folderOpen } from "react-icons-kit/fa/folderOpen";

import SmallTooltip from "../SmallTooltip/SmallTooltip";

class FolderItem extends Component {
  constructor(props) {
    super(props);

    this.toggleFolders = this.toggleFolders.bind(this);
    this.checkToken = this.checkToken.bind(this);

    this.state = {
      isOpen: this.checkToken(this.props.parentFolderToken)
    };
  }

  toggleFolders = (f, e) => {
    e.stopPropagation();

    this.setState({
      ...this.state,
      isOpen: !this.state.isOpen
    });

    this.props.onSelectFolder(f,this.props.parentFolderToken);
  };

  checkToken() {
    return this.props.selectedFoldersMap.includes(this.props.folder.token);
  }

  render() {
    const { folder, selectedFolder, onSelectFolder, selectedFoldersMap } = this.props;
 
    return (
      <div onClick={e => this.toggleFolders(folder, e)} key={folder.token} className="folder">
        <Icon
          className="icon"
          size={11}
          icon={
            this.checkToken() ? folderOpen : folderClosed 
          }
        />
        <span className="name">{folder.name}</span>
        {!folder.folders.length && <SmallTooltip text="Empty" />}
        {(this.checkToken()) &&
          folder.folders.map((nestedFolder, index) => (
            <FolderItem
              onSelectFolder={onSelectFolder}
              key={nestedFolder.token}
              folder={nestedFolder}
              selectedFolder={selectedFolder}
              selectedFoldersMap={selectedFoldersMap}
              parentFolderToken={folder.token}
            />
          ))}
      </div>
    );
  }
}

export default FolderItem;
