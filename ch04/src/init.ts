export const init = (callback: () => void) :void =>{
console.log('default initializaton finished.')
callback()
console.log('all initialization finished.')
}  