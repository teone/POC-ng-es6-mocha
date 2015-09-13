'use strict';

import {expect} from 'chai';

import {MainController} from '../src/app/controllers/main.controller.js';

var mockService, ctrl;

describe('The Main Controller', function() {

  beforeEach(function() {

    // define the mocked service
    mockService = {
      list: [1, 2]
    }

    // instantiate the controller
    ctrl = new MainController(mockService);
  });

  it('should load the list', function(){
    expect(ctrl.list.length).to.equal(2);
  });
});