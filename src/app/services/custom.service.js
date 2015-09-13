'use strict';

function CustomService () {
  this.list = [1, 2, 3, 4];

  this.add = (item) => {
    this.list.push(item);
    return this.list;
  }
}

export { CustomService }