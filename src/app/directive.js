'use strict';

function ctrl(){
  this.name = 'Misko Hevery';
};

const directiveBuilder = () => {
  return {
    restrict: 'E',
    controller: ctrl,
    controllerAs: 'vm',
    templateUrl: 'src/app/template.html',
    scope: {},
    bindToController: true
  };
};

export {directiveBuilder as myDirective}
