/**
 * User Service
 * Handles services for all user instances
 */
export default class UserService {
  /**
   * Constructor
   */
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  fetchData() {
    return this.$http({
        method: "GET",
        //url: "https://jsonplaceholder.typicode.com/users"
        url: 'http://localhost:8082/users'
    });
  };

}