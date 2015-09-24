'use strict';

export function ctrl(){
  this.name = 'Misko Hevery';
};

export default function(){
  return {
    restrict: 'E',
    controller: ctrl,
    controllerAs: 'vm',
    templateUrl: 'src/app/template.html',
    scope: {},
    bindToController: true
  };
};
