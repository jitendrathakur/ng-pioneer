import ContextController from './context.controller';

describe('ContextController', () => {
  const Mock = {
    scope: {},
    UserService: {
      fetchData: () =>  ({then: data => data})
    },
    usersList: {'data': {'activities': []}}
  };
  let testController;

  beforeEach(() => {
    testController = new ContextController(
      Mock.scope,
      Mock.UserService,
      Mock.usersList
    );
  });

  it('should exist', () => {
    expect(testController).toBeDefined();
  });

});
