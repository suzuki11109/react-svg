import {observable, autorun} from 'mobx';
import {THandle, BHandle, RHandle, LHandle, TrHandle, TlHandle, BrHandle, BlHandle} from './handle';

export class RotateHandle {
  width = 10;
  height = 10;
  x = 0;
  y = 0;

  setPosition(element) {
    this.x = element.x + (element.width / 2);
    this.y = element.y - 30;
  }
}

export class ElementSelection {
  @observable rotateHandle;
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
      new BlHandle()
    ];
    this.rotateHandle = new RotateHandle();
    this.element = element;
  }

  setPositionOnElement() {
    if (this.element) {
      this.handles.forEach(handle => handle.setPosition(this.element));
      this.rotateHandle.setPosition(this.element);
    }
  }
}


export class State {
  @observable selectingHandle;
  @observable elementSelection;
  @observable elements = [];

  constructor() {
    let rect = {
      x: 50, y: 50, width: 100, height: 100, fill: 'red'
    };
    this.elements.push(rect);
    this.selectElement(this.elements[0]);
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
