/* eslint-disable */
export const withSandbox = function (code, context = {}) {
  return new Function('window', `with(window) { return ${ code } }`).call(context, context)
}
