import {observable} from 'mobx';

class Handle {
  @observable width = 10;
  @observable height = 10;
  @observable x = 0;
  @observable y = 0;
}

export class THandle extends Handle {
  move(e, element) {
    let oldy = element.y;
    element.y = Math.max(0, Math.min(element.y + element.height - (10 / 2), e.nativeEvent.offsetY));
    element.height += (oldy - element.y);
  }

  setPosition(element) {
    this.x = element.x + (element.width / 2);
    this.y = element.y - (10 / 2);
  }
}

export class BHandle  extends Handle {
  move(e, element) {
    var dragy = Math.max(element.y + (10 / 2), Math.min(500, e.nativeEvent.offsetY));
    element.height = dragy - element.y;
  }

  setPosition(element) {
    this.x = element.x + (element.width / 2);
    this.y = element.y + element.height - (10 / 2);
  }
}

export class RHandle  extends Handle {
  @observable width = 10;
  @observable height = 10;
  @observable x = 0;
  @observable y = 0;

  move(e, element) {
    var dragx = Math.max(element.x + (10 / 2), Math.min(500, e.nativeEvent.offsetX));
    element.width = dragx - element.x;
  }

  setPosition(element) {
    this.x = element.x + element.width - (10 / 2);
    this.y = element.y + element.height / 2;
  }
}

export class LHandle  extends Handle {
  move(e, element) {
    var oldx = element.x;
    element.x = Math.max(0, Math.min(element.x + element.width - (10 / 2), e.nativeEvent.offsetX));
    element.width += (oldx - element.x);
  }

  setPosition(element) {
    this.x = element.x - (10 / 2);
    this.y = element.y + element.height / 2;
  }
}

export class TrHandle  extends Handle {
  move(e, element) {
    var dragx = Math.max(element.x + (10 / 2), Math.min(500, e.nativeEvent.offsetX));
    element.width = dragx - element.x;

    let oldy = element.y;
    element.y = Math.max(0, Math.min(element.y + element.height - (10 / 2), e.nativeEvent.offsetY));
    element.height += (oldy - element.y);
  }

  setPosition(element) {
    this.x = element.x + element.width - (10 / 2);
    this.y = element.y - (10 / 2);
  }
}

export class TlHandle  extends Handle {
  move(e, element) {
    var oldx = element.x;
    element.x = Math.max(0, Math.min(element.x + element.width - (10 / 2), e.nativeEvent.offsetX));
    element.width += (oldx - element.x);

    let oldy = element.y;
    element.y = Math.max(0, Math.min(element.y + element.height - (10 / 2), e.nativeEvent.offsetY));
    element.height += (oldy - element.y);
  }

  setPosition(element) {
    this.x = element.x - (10 / 2);
    this.y = element.y - (10 / 2);
  }
}

export class BlHandle  extends Handle {
  move(e, element) {
    var oldx = element.x;
    element.x = Math.max(0, Math.min(element.x + element.width - (10 / 2), e.nativeEvent.offsetX));

    element.width += (oldx - element.x);
    var dragy = Math.max(element.y + (10 / 2), Math.min(500, e.nativeEvent.offsetY));
    element.height = dragy - element.y;
  }

  setPosition(element) {
    this.x = element.x - (10 / 2);
    this.y = element.y + element.height - (10 / 2);
  }
}


export class BrHandle  extends Handle {
  move(e, element) {
    var dragx = Math.max(element.x + (10 / 2), Math.min(500, e.nativeEvent.offsetX));
    element.width = dragx - element.x;

    var dragy = Math.max(element.y + (10 / 2), Math.min(500, e.nativeEvent.offsetY));
    element.height = dragy - element.y;
  }

  setPosition(element) {
    this.x = element.x + element.width - (10 / 2);
    this.y = element.y + element.height - (10 / 2);
  }
}
