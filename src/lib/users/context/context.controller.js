export default class ContextController {

	constructor($scope, UserService, usersList) {
		'ngInject';
		this.UserService = UserService;

		this.users = usersList.data;
	}

	reset() {
		this.UserService.fetchData().then(response => {
			this.users = response.data;
		});
	}

}
