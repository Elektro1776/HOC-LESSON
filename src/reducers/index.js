
const initialState = {
  currentComponent: 0
}
export default (store = initialState, action) =>  {
      switch (action.type) {
        case 'MOVE_FORWARD': {
          const currentComponent = store.currentComponent += 1;;

          return Object.assign({}, store, { currentComponent });
        }

        case 'MOVE_BACKWARD': {
          const currentComponent = store.currentComponent -= 1;;

          return Object.assign({}, store, { currentComponent });
        }
        default:
          return store
      }


}
