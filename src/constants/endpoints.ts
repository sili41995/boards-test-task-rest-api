const enum Endpoints {
  root = '/',
  register = '/register',
  login = '/login',
  logout = '/logout',
  current = '/current',
  dynamicId = 'id',
  dynamicToken = 'token',
  rootWithId = `/:${Endpoints.dynamicId}`,
  statusWithId = `/status:${Endpoints.dynamicId}`,
}

export default Endpoints;
