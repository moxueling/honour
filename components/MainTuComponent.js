
import Fetch from "../modules/fetch"
class MainAudioComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            tu:[],
            i:1
        }
    }
    showTu(){
        let arr=[];
       this.state.tu.forEach((item)=>{
        let time=item.sCreated.slice(item.sCreated.indexOf("-")+1,item.sCreated.indexOf(" "))
           arr.push(
            <dl>
                <dt><img src={item.sIMG} alt={item.sTitle}/></dt>
                <dd>
                    <h4>{item.sTitle}</h4>
                    <p>{item.sDesc.slice(0,35)}...</p>
                    <span>{time}</span>
                </dd>
            </dl>
           )
       })
        return arr;
    }
    getTu(i=1){
        let that=this
        if(!this.props.type){
            Fetch.Get("http://localhost:3000/app/wmp/v3.1/?p0=18&p1=searchNewsKeywordsList&page="+i+"&pagesize=4&order=sIdxTime&r0=script&r1=NewsObj&source=app_news_search&openId=&agent=&channel=&area=&&_=1505980964307",function(result){
                // that.state.tu=result.msg.result;
                // Fetch.Get("http://localhost:3000/app/wmp/v3.1/?p0=18&p1=searchNewsKeywordsList&page=2&pagesize=4&order=sIdxTime&r0=script&r1=NewsObj&source=app_news_search&openId=&agent=&channel=&area=&&_=1505985747182",function(result){
                let col=that.state.tu;
                result.msg.result.forEach((item)=>{
                    col.push(item)
                })
                    that.setState({
                        tu:col
                    })
              
                // that.setState({
                //     tu:result.msg.result
                // })
                
            })
        }else{
            Fetch.Get("http://localhost:3000/app/wmp/v3.1/?p0=18&p1=searchNewsKeywordsList&page="+i+"&pagesize=4&order=sIdxTime&r0=script&r1=NewsObj&source=app_news_search&type=iType&id="+that.props.cid+"&openId=&agent=&channel=&area=&&_=1505985747178",function(result){
                // that.state.tu=result.msg.result;
                // Fetch.Get("http://localhost:3000/app/wmp/v3.1/?p0=18&p1=searchNewsKeywordsList&page=2&pagesize=4&order=sIdxTime&r0=script&r1=NewsObj&source=app_news_search&type=iType&id="+that.props.cid+"&openId=&agent=&channel=&area=&&_=1505985747182",function(result){
                let col=that.state.tu;
                result.msg.result.forEach((item)=>{
                    col.push(item)
                })
                that.setState({
                    tu:col
                })
                // })
                
            })
        }
}
    componentWillMount(){
        window.addEventListener("scroll",()=>{
            this.state.height=document.body.scrollTop+document.documentElement.clientHeight;
            this.state.pageheight=document.documentElement.scrollHeight;
            
            if(this.state.height==this.state.pageheight){
                
                if(this.state.i<6){
                    this.state.i++;
                    this.getTu(this.state.i)
                }
                
            }
        })
     
        this.getTu()
    }

    render(){
        return(
            
            <div className="swiper-slide">
                {this.showTu()}
                {this.state.i==6?<p className="p"><a href="#stra">点击查看更多</a></p>:""}
                
            </div>

        )
    }
}

MainAudioComponent.defaultProps={

}

export default MainAudioComponent;