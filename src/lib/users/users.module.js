import UserService from './users.service';
import route from './users.route';

angular.module('users', [])
  .service('UserService', UserService)
  .config(route);
