// function isDescriptor (desc) {
//   if (!desc ) {
//     return false
//   }
//   const keys = ['value', 'initializer', 'get', 'set']
//   for (let i = 0, l = keys.length; i < l; i++) {
//     if (desc.hasOwnProperty(keys[i])) {
//       return true
//     }
//   }
//   return false
// }

// export const decorate = function (handleDescriptor) {
//   return function (...entryArgs) {
//     if (isDescriptor(entryArgs[entryArgs.length - 1])) {
//       return handleDescriptor(...entryArgs)
//     } else {
//       return function () {
//         handleDescriptor(...arguments, ...entryArgs)
//       }
//     }
//   }
// }
