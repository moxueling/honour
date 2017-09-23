
import Fetch from "../modules/fetch"

class hero_stra extends React.Component{

    constructor(props,context){
        super(props,context)
        this.state={
           data : [],
           data_video :[]
        }
    }				
    
    get(arr){
        let col = [];
        arr.forEach(function(item){
            col.push(
                <li>
                    <img src={item.sIMG}/>
                    <div className="hero_text">
                        <h4>{item.sTitle}</h4>
                        <p>{item.sDesc}</p>
                    </div>
                </li>
            )
        })
        return col
    }

    getVideo(arr){
        let col = [];
        arr.forEach(function(item){
            col.push(
                <div className="stra_video">
                    <img src={item.sIMG}/>
                    <h4>{item.sTitle}</h4>
                    <p>
                        <span>{item.iTotalPlay}</span>
                    </p>
                </div>
            )
        })
        return col
    }

    getDate(){
        // Fetch.Get("http://localhost:3000/abc/wmp/data/js/v3/WMP_TYPELIST_GW_18.js?_=1506054022329",(result)=>{
        //     // console.log(result)
        // })

        // Fetch.Get("http://localhost:3000/app/wmp/v3.1/?p0=18&p1=searchKeywordsList&page=1&pagesize=4&order=sIdxTime&r0=script&r1=userObj&source=app_search&type=iKeyword&id=2142&openId=&agent=&channel=&area=&&_=1506132744357",(result)=>{
        //     console.log(result)
        // })
        // Fetch.Get("http://localhost:3000/abc/wmp/data/js/v3/WMP_PARENTTYPE_GW_18.js?_=1506070532406",function(result){
        //     //http://ams.qq.com/abc
        //     console.log(result)
        //     console.log(2)
        // })
        let that = this;
        Fetch.Get("http://localhost:3000/app/wmp/v3.1/?p0=18&p1=searchKeywordsList&page=1&pagesize=2&order=sIdxTime&r0=script&r1=userObj&source=app_search&type=iSubType&id=671&openId=&agent=&channel=&area=&&_=1506075250585",function(result){
            //http://ams.qq.com/abc
            console.log(result)
              // 安琪拉蹲草丛一套伤害爆炸秒元芳  2  英雄攻略
            that.setState({
                data_video:result.msg.result
            })

        })
        
         Fetch.Get("http://localhost:3000/app/wmp/v3.1/?p0=18&p1=searchNewsKeywordsList&page=1&pagesize=2&order=sIdxTime&r0=script&r1=NewsObj&source=app_news_search&type=iSubType&id=148&openId=&agent=&channel=&area=&&_=1506075250586",function(result){
            //http://ams.qq.com/abc
            // console.log(result.msg.result)// 安琪拉是位输出十分暴力的法师，正确的出装方式让安琪拉可以毁天灭地 2  英雄攻略
            that.setState({
                data:result.msg.result
            })

        })

    }

    componentWillMount(){
        this.getDate()

    }

    render(){
        console.log(this.state)
        
        return(
            <div id="hero_stra">
                <h3>英雄攻略</h3>

                <div className="hero-video">
                    {this.getVideo(this.state.data_video)}
                </div>

                <ul>
                    {this.get(this.state.data)}
                </ul>

                <p className="hero_bottom">
                    加载更多<a>“安琪拉”</a>攻略内容
                </p>
            </div>
        )
    }

    componentDidMount(){

    }

    componentDidUpdate(){
        
    }
}

export default hero_stra;