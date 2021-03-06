import {observable, autorun} from 'mobx';
import {THandle, BHandle, RHandle, LHandle, TrHandle, TlHandle, BrHandle, BlHandle} from './handle';

export class RotateHandle {
  width = 10;
  height = 10;
  x = 0;
  y = 0;
  fill = 'yellow';

  move(e, element) {
    let cx = element.x + (element.width / 2);
    let cy = element.y + (element.height / 2);
    let mx = e.nativeEvent.offsetX;
    let my = e.nativeEvent.offsetY;

    let rad = Math.atan2(mx - cx, cy - my);

    let deg = (rad * (180 / Math.PI));

    element.transform = `rotate(${deg}, ${cx}, ${cy})`;
  }

  setPosition(element) {
    this.x = element.x + (element.width / 2);
    this.y = element.y - 30;
  }
}

export class ElementSelection {
  @observable handles = [];
  @observable element;

  constructor(element) {
    autorun(() => {
      this.setPositionOnElement();
    });
    this.handles = [
      new THandle(),
      new BHandle(),
      new RHandle(),
      new LHandle(),
      new TrHandle(),
      new BrHandle(),
      new TlHandle(),
      new BlHandle(),
      new RotateHandle()
    ];
    this.element = element;
  }

  setPositionOnElement() {
    if (this.element) {
      this.handles.forEach(handle => handle.setPosition(this.element));
    }
  }
}


export class State {
  @observable selectingHandle;
  @observable elementSelection;
  @observable elements = [];

  constructor() {
    let rect = {
      x: 50, y: 50, width: 100, height: 100, fill: 'red', transform: ''
    };
    this.elements.push(rect);
    // this.selectElement(this.elements[0]);
  }

  selectElement(element) {
    this.elementSelection = new ElementSelection(element);
  }

  selectHandle(handle) {
    this.selectingHandle = handle;
  }

  moveHandle(e) {
    if (this.selectingHandle) {
      this.selectingHandle.move(e, this.elementSelection.element);
    }
  }

  unselectHandle() {
    this.selectingHandle = undefined;
  }
}
