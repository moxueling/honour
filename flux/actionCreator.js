import dispatcher from './dispatcher'
const actioncreator = {
    updatapath(path){
        let action = {
            path:path,
            type:'UPDATA_PATH'
        }
        dispatcher.dispatch(action)
    }
}

export default actioncreator