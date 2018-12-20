
const initialState = {
  currentComponent: 0,
  carou_length: 0
}
export default (store = initialState, action) =>  {
      switch (action.type) {
        case 'SET_LENGTH': {
          return Object.assign({}, store, { carou_length: action.length - 1 });
        }
        case 'MOVE_FORWARD': {
          const {currentComponent } = store;
          const { maxLength } = action;
          if (currentComponent >= maxLength) {
            return Object.assign({}, store, { currentComponent: 0 });
          }
          const next = currentComponent + 1
          return Object.assign({}, store, { currentComponent: next });
        }

        case 'MOVE_BACKWARD': {
          const {currentComponent } = store;
          const { maxLength } = action;

          if (store.currentComponent === 0) {
            return Object.assign({}, store, { currentComponent: maxLength });
          }
          return Object.assign({}, store, { currentComponent: currentComponent - 1 });
        }
        default:
          return store
      }


}
