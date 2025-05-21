const enum Endpoints {
  root = '/',
  signUp = '/sign-up',
  signIn = '/sign-in',
  signOut = '/sign-out',
  current = '/current',
  dynamicId = 'id',
  dynamicToken = 'token',
  rootWithId = `/:${Endpoints.dynamicId}`,
  statusWithId = `/status:${Endpoints.dynamicId}`,
}

export default Endpoints;
