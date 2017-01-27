import {observable, autorun} from 'mobx';

export class THandle {
  @observable width = 10;
  @observable height = 10;
  @observable x = 0;
  @observable y = 0;

  move(e, element) {
    let oldy = element.y;
    element.y = Math.max(0, Math.min(element.y + element.height - (10 / 2), e.pageY));
    element.height += (oldy - element.y);
  }

  setPosition(element) {
    this.x = element.x + (element.width / 2);
    this.y = element.y - (10 / 2);
  }
}

export class BHandle {
  @observable width = 10;
  @observable height = 10;
  @observable x = 0;
  @observable y = 0;

  move(e, element) {
    var dragy = Math.max(element.y + (10 / 2), Math.min(500, e.pageY));
    element.height = dragy - element.y;
  }

  setPosition(element) {
    this.x = element.x + (element.width / 2);
    this.y = element.y + element.height - (10 / 2);
  }
}

export class RHandle {
  @observable width = 10;
  @observable height = 10;
  @observable x = 0;
  @observable y = 0;

  move(e, element) {
    let pageX = e.pageX;
    element.width = pageX - element.x;
  }

  setPosition(element) {
    this.x = element.x + element.width - (10 / 2);
    this.y = element.y + element.height / 2;
  }
}

export class LHandle {
  @observable width = 10;
  @observable height = 10;
  @observable x = 0;
  @observable y = 0;

  move(e, element) {
    var oldx = element.x;
    element.x = Math.max(0, Math.min(element.x + element.width - (10 / 2), e.pageX));
    element.width += (oldx - element.x);
  }

  setPosition(element) {
    this.x = element.x - (10 / 2);
    this.y = element.y + element.height / 2;
  }
}

export class TrHandle {
  @observable width = 10;
  @observable height = 10;
  @observable x = 0;
  @observable y = 0;

  move(e, element) {
    let pageX = e.pageX;
    element.width = pageX - element.x;
  }

  setPosition(element) {
    this.x = element.x + element.width - (10 / 2);
    this.y = element.y - (10 / 2);
  }
}

export class BrHandle {
  @observable width = 10;
  @observable height = 10;
  @observable x = 0;
  @observable y = 0;

  move(e, element) {

  }

  setPosition(element) {
    this.x = element.x + element.width - (10 / 2);
    this.y = element.y + element.height - (10 / 2);
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
      // new TrHandle(),
      // new BrHandle(),
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
  @observable aRect = {
    x: 50, y: 50, width: 100, height: 100
  };

  constructor() {
    this.selectElement(this.aRect);
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
