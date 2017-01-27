import React, { Component } from 'react';
import {observer} from 'mobx-react';

@observer
class App extends Component {
  onClickElement = (element) => {
    this.props.state.selectElement(element);
  }

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
    return <div>
      <svg onMouseMove={this.onMouseMoveHandle} width={500} height={500}
        onMouseUp={this.onMouseUpHandle}>
        {renderElements(elements, this.onClickElement)}
        {drawSelectionBorder(elementSelection)}
        {createElementSelection(elementSelection, this.onMouseDownHandle)}
      </svg>
    </div>;
  }
}

function drawSelectionBorder(elementSelection) {
  if (elementSelection && elementSelection.element) {
    let el = elementSelection.element;
    let coordinate = `M${el.x} ${el.y} H ${el.x + el.width} V ${el.y + el.height} H ${el.x} Z`;
    return <path d={coordinate} fill="transparent" stroke="black" />;
  }
}

function renderElements(elements, onClickElement) {
  return elements.map((element) => {
    return <rect x={element.x} y={element.y} width={element.width} height={element.height} fill={'red'} transform={element.transform} onClick={() => onClickElement(element)} />;
  });
}

function createElementSelection(elementSelection, onMouseDownHandle) {
  if (elementSelection) {
    return elementSelection.handles.map((handle) => {
      return <rect
          x={handle.x}
          y={handle.y}
          width={handle.width}
          height={handle.height}
          fill={handle.fill}
          onMouseDown={() => onMouseDownHandle(handle)} />
    });
  }
}

export default App;
