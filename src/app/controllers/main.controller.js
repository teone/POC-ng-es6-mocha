'use strict';

function MainController (CustomService) {
  this.text = 'Lorem Ipsum';
}

MainController.$inject = ['CustomService'];

export { MainController }