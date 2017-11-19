/** Determines whether the server is running in a test environment. */
/* istanbul ignore next */  
export function isTest() { return process.env['NODE_ENV'] === 'test'; }