import 'whatwg-fetch'
import 'es6-promise'

const FetchGet=(url)=>{
    let result = fetch(url,{
        credentials:"include",
        header:{"accept":'*/*'}
    })
    return result;
}

// const Get=(url,cb)=>{
//     FetchGet(url).then((res)=>{
//         return res.json()
//     }).then((json)=>{
//         cb(json)
//     })
// }

const Get=(url,cb)=>{
    FetchGet(url).then((res)=>{
        return res.text()
    }).then((text)=>{
        text=text.replace(";","")
        if(text.indexOf("[")<text.indexOf("{")&&text.indexOf("[")>-1){
            text=text.slice(text.indexOf("["))
        }else{
            text=text.slice(text.indexOf("{"))
        }
        
        cb(JSON.parse(text))
    })
    
}

export default Get