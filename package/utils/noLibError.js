/* eslint-disable */
export const noLibError = function (lib, alias, variable) {
  const message = `can not find ${ lib } !
  
yarn add ${ lib }
import ${ alias } from '${ lib }'
Vue.use(magic, { ${ variable }: ${ alias } })
`
  return console.error(message)
}
