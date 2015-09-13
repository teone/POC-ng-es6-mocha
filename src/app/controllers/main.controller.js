'use strict';

function MainController (CustomService) {
  this.list = CustomService.list;

  this.addToService = (item) => {
    CustomService.add(item);
    this.item = null;
  }
}

export { MainController }