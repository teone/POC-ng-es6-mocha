'use strict';

const angular = require('angular');

import { CustomService } from './services/custom.service.js';
import { MainController } from './controllers/main.controller.js';

angular.module('ngEs6',[])
.service('CustomService', CustomService)
.controller('MainController', MainController);