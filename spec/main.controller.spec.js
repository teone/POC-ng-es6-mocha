'use strict';

import {expect} from 'chai';
const sinon = require('sinon'); // understand why import does not work here

import {MainController} from '../src/app/controllers/main.controller.js';

var mockService, ctrl;

describe('The Main Controller', function() {

  beforeEach(function() {

    // define the mocked service
    mockService = {
      list: [1, 2],
      add: sinon.spy()
    }

    // instantiate the controller
    ctrl = new MainController(mockService);
  });

  it('should load the list', function(){
    expect(ctrl.list.length).to.equal(2);
  });

  it('should add an item to the service', function(){
    ctrl.addToService(3);
    expect(mockService.add.called).to.equal(true);
  });
});