export default class ContextController {

	constructor($scope, UserService, usersList) {
		'ngInject';
		$scope.users = usersList.data;
	}

}
