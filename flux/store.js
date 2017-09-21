

const EventEmitter = require("events").EventEmitter
const store = Object.assign({},EventEmitter.prototype,{
    path:"main",
    getpath(){
        return this.path
    },
    updatapath(path){
        this.path=path;
        this.emit("updata-path")
    },
    addChangeListener(callback){
        this.on("updata-path",callback)
    }
})



export default store