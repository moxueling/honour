import 'whatwg-fetch'
import 'es6-promise'

const FetchPost = (url,params)=>{
    let str = ''
    for (var key in params) {
        str+='&'+key+'='+params[key]
    }
    str=str.slice(1)
    let result = fetch(url,{
        // credentials:'include',
        headers:{
            'Accept':'*/*',
            'Content-Type':'application/x-www-form-urlencoded'
        },
        method:'POST',
        body:str
    })
    return result
}

const Post=(url,params,cb)=>{
    FetchPost(url,params).then((res)=>{
        return res.text()
    }).then((text)=>{
        cb(text)
    })
}

export default Post