
import Fetch from "../modules/fetch"

class StraAudioComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            audio:[],
            i:[]
        }
    }
    showAudio(){
        let arr=[];
       this.state.audio.forEach((item)=>{
           let time=item.sCreated.slice(item.sCreated.indexOf("-")+1,item.sCreated.indexOf(" "))
           arr.push(
            <dl className="pull-left">
                <dt><img src={item.sIMG}/></dt>
                <dd>{item.sTitle.slice(0,25)}...</dd>
                <dd><span>{item.iTotalPlay}</span><span>{time}</span></dd>
            </dl>
           )
       })
        
        return arr;
    }
    getAudio(){
        let colaudio=[2142,677,862,591]
        let colmatch=[2507,2507,2508,2132,2509,2135,2510,2504,2511,2512]
        let colmu=[2132,2132,2499,2137,2140,1274,2500,2131,2501,2502,2503,2504,2512,2506]
        let that=this
        if(this.props.cid=="audio"){
            if(this.props.type==1){
                Fetch.Get("http://localhost:3000/app/wmp/v3.1/?p0=18&p1=searchKeywordsList&page=1&pagesize=4&order=sIdxTime&r0=script&r1=userObj&source=app_search&type=iType&id=677&openId=&agent=&channel=&area=&&_=1506081783598",function(result){
                    that.setState({
                        audio:result.msg.result,
                        i:that.props.i
                    })
                })
            }else{
                Fetch.Get("http://localhost:3000/app/wmp/v3.1/?p0=18&p1=searchKeywordsList&page=1&pagesize=4&order=sIdxTime&r0=script&r1=userObj&source=app_search&type=iKeyword&id="+colaudio[that.props.type]+"&openId=&agent=&channel=&area=&&_=1506081783593",function(result){
                    that.setState({
                        audio:result.msg.result,
                        i:that.props.i
                    })
                })
            }
        }else if(this.props.cid=="match"){
            Fetch.Get("http://localhost:3000/app/wmp/v3.1/?p0=18&p1=searchKeywordsList&page=1&pagesize=4&order=sIdxTime&r0=script&r1=userObj&source=app_search&type=iKeyword&id="+colmatch[that.props.type]+"&openId=&agent=&channel=&area=&&_=1506081783609",function(result){
                that.setState({
                    audio:result.msg.result,
                    i:that.props.i
                })
            })
        }else if(this.props.cid=="mu"){
            if(this.props.type==0){
                Fetch.Get("http://localhost:3000/app/wmp/v3.1/?p0=18&p1=searchKeywordsList&page=1&pagesize=8&order=sIdxTime&r0=script&r1=userObj&source=app_search&type=iKeyword&id=2132,%202499,%202137,%202140,%201274,%202500,%202131,%202501,%202502,%202503,%202504,%202512,%202506&openId=&agent=&channel=&area=&&_=1506138008652",function(result){
                    that.setState({
                        audio:result.msg.result,
                        i:that.props.i
                    })
                })
            }else{
                Fetch.Get("http://localhost:3000/app/wmp/v3.1/?p0=18&p1=searchKeywordsList&page=1&pagesize=4&order=sIdxTime&r0=script&r1=userObj&source=app_search&type=iKeyword&id="+colmu[that.props.type]+"&openId=&agent=&channel=&area=&&_=1506085885431",function(result){
                    that.setState({
                        audio:result.msg.result,
                        i:that.props.i
                    })
                })
            }
        }
}
    componentWillMount(){
        this.getAudio()
    }
    componentWillReceiveProps(props,state){
        
    }
    render(){
        return(
            
            <div className="swiper-slide">
                {this.showAudio()}
                
                <p><a href="#">加载更多<b>{this.state.i[this.props.type]}</b>内容</a></p>
            </div>

        )
    }
}

StraAudioComponent.defaultProps={
    
}

export default StraAudioComponent;