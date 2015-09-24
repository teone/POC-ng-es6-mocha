'use strict';

const angular = require('angular');

import { CustomService } from './services/custom.service.js';
import { GithubService } from './services/github.service.js';
import { MainController } from './controllers/main.controller.js';
import myDirective from './directive.js';

angular.module('ngEs6',[])
.service('CustomService', CustomService)
.service('GithubService', GithubService)
.controller('MainController', MainController)
.directive('myDirective', myDirective);