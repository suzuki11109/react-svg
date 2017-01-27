import React, { Component } from 'react';
import {observer} from 'mobx-react';

@observer
class App extends Component {
  onMouseMoveHandle = (e) => {
    this.props.state.moveHandle(e);
  }

  onMouseUpHandle = () => {
    this.props.state.unselectHandle();
  }

  onMouseDownHandle = (handle) => {
    this.props.state.selectHandle(handle);
  }

  render() {
    let { aRect, elementSelection } = this.props.state;
    return <div>
      <svg onMouseMove={this.onMouseMoveHandle} height={500}
        onMouseUp={this.onMouseUpHandle}>

        <rect x={aRect.x} y={aRect.y} width={aRect.width} height={aRect.height} fill="red" />
        {createElementSelection(elementSelection, this.onMouseDownHandle)}
      </svg>
      </div>;
  }
}

function createElementSelection(elementSelection, onMouseDownHandle) {
  return elementSelection.handles.map((handle) => {
    return <rect
        x={handle.x}
        y={handle.y}
        width={handle.width}
        height={handle.height}
        fill="black"
        onMouseDown={() => onMouseDownHandle(handle)} />
  });
}

export default App;
