
import Fetch from "../modules/fetch"

class MainAudioComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            audio:[]
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
        let that=this
        if(this.props.type==0){
        Fetch.Get("http://localhost:3000/app/wmp/v3.1/?p0=18&p1=searchKeywordsList&page=1&pagesize=4&order=sIdxTime&r0=script&r1=userObj&source=app_search&type=iKeyword&id=2132&openId=&agent=&channel=&area=&&_=1505881345017",function(result){
            that.setState({
                audio:result.msg.result
            })
        })
    }else{
        Fetch.Get("http://localhost:3000/app/wmp/v3.1/?p0=18&p1=searchKeywordsList&page=1&pagesize=4&order=sIdxTime&r0=script&r1=userObj&source=app_search&type=iKeyword&id=2507&openId=&agent=&channel=&area=&&_=1505978886506",function(result){
            that.setState({
                audio:result.msg.result
            })
        })
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
                <p><a href="#stra">加载更多内容</a></p>
            </div>

        )
    }
}

MainAudioComponent.defaultProps={
    
}

export default MainAudioComponent;