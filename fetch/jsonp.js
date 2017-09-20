import Jsonp from 'jsonp'

const JsonpF=(url,cb)=>{
    Jsonp(url,{
        param:'callback',prefix:'ghb'
    },(err,result)=>{
        if(err) throw err;
        cb(result)
    })
}
export default JsonpF;