import ContextController from './context/context.controller';
/**
 * Users main config
 * Handles the configuration user states
 * @param {object} stateProvider
 */
export default $stateProvider => {
  'ngInject';
  $stateProvider.state('users', {
    url: '/users',
    views: {
      'context': {
        templateUrl: 'lib/users/context/context.html',
        controller: ContextController,
        controllerAs: 'userCtrl'
      }
    },
    resolve: {
      usersList: (UserService) => UserService.fetchData()
    }
  });
};
