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
    let { elements, elementSelection } = this.props.state;
    let rotateHandle = elementSelection.rotateHandle;
    return <div>
      <svg onMouseMove={this.onMouseMoveHandle} width={500}height={500}
        onMouseUp={this.onMouseUpHandle}>
        {renderElements(elements)}
        {createElementSelection(elementSelection, this.onMouseDownHandle)}
        <rect x={rotateHandle.x} y={rotateHandle.y} width={10} height={10} fill={'yellow'} />
      </svg>
      </div>;
  }
}

function renderElements(elements) {
  return elements.map((element) => {
    return <rect x={element.x} y={element.y} width={element.width} height={element.height} fill={'red'} />;
  });
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
