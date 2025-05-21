const globalPrefix = '/api';

const enum RouterPaths {
  root = '/',
  auth = `${globalPrefix}/auth`,
  boards = `${globalPrefix}/boards`,
  tasks = `${globalPrefix}/tasks`,
}

export default RouterPaths;
