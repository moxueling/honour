
import store from './store'
const Dispatcher = require('flux').Dispatcher
const dispatcher = new Dispatcher()

dispatcher.register((action)=>{
    switch (action.type) {
        case 'UPDATA_PATH':
          store.updatapath(action.path)  
            break;
        default:
            break;
    }
})

export default dispatcher