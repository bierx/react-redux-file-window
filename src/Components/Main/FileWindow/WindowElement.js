import React, { Component } from "react";
import Icon from "react-icons-kit";
import {fileO} from 'react-icons-kit/fa/fileO'

class WindowFolder extends Component {

  render() {
    const { element, onSelectElement } = this.props;

    return (
      <div onClick={e => onSelectElement(element, e)} className="folder-item file">
        <Icon className="icon" icon={fileO} size={36}  />
        <span className="name">{element.name}</span>
      </div>
    );
  }
}

export default WindowFolder;
