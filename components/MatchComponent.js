
import fetch from "../modules/fetch"

class MatchComponent extends React.Component{
    
    constructor(props,context){
        super(props,context)
        
        this.state={
            ishide : false
        }
    }

    getData(){
        // fetch.JsonpF("http://info.zb.video.qq.com/?cnlid=124208302&host=qq.com&cmd=2&qq=0&guid=eb2d67b093446a1ff49c11502112fd4c&txvjsv=2.0&stream=2&debug=&ip=&system=1&sdtfrom=113&_=1505965604182",(results)=>{
        //     // console.log(results)
        // })

        // fetch.JsonpF("http://report.huatuo.qq.com/report.cgi?appid=20286&platform=unknown&speedparams=flag1%3D21854%26flag2%3D1%26flag3%3D7%26flag5%3D3%261%3D2%262%3D1051http://apps.game.qq.com/easnew/go/eas.php?&m=SendLog_web&click_type=508&Url=http%3A%2F%2Fpvp.qq.com%2Fm%2Fm201606%2Fmatch%2F&ReferrerUrl=http%3A%2F%2Fpvp.qq.com%2Fm%2Fm201706%2Fstrategycenter.shtml&userId=&openId=&agent=Ios&channel=&area=&serviceType=pvp&iuName=iu_pvp&action_type=pv&vUrl=pvp.matchindex&adtag=&stayTime=&clickUrl=http%3A%2F%2Fpvp.qq.com%2Fm%2Fm201606%2Fmatcgindex.shtml&contentId=&contentType=&contentSource=&contentCategory=&r=1505980643076",(results)=>{
        //     console.log(results)
        // })
        var that = this;
        fetch.GetHtml("http://localhost:3000/qq/webplat/info/news_version3/15592/24418/24853/m16639/list_2.shtml",(result)=>{
            window.addEventListener("scroll",function(){
                if(document.body.scrollTop + document.body.clientHeight >= document.documentElement.scrollHeight){
                    that.state.data = result;
                    that.setState({
                        data :result,
                        ishide : true
                    })
                }
            })
        })
    }

    componentWillMount(){
        this.getData();
    }    

    render(){
        return(
            <div id="match">
                <div className="match_title">
                    <h1>
                        王者荣耀&nbsp;冠军杯
                        <span>官方举办</span>
                    </h1>
                    <p>2017-07-27&nbsp;2017-08-19</p>
                    <span className="match_exit">已结束</span>
                </div>

                <div className="match_video"></div>

                <h4 className="match_message">
                    赛事资讯
                </h4>
                
                <ul className="match_list">
                    <li>
                        <a href="#">秋季赛前瞻之eStar：战术体系决定成败</a>
                        <time>09/21</time>
                    </li>
                    <li>
                        <a href="#">秋季赛前瞻之EDG.M：老牌电竞豪门战术执行力极强，或成最大黑马</a>
                        <time>09/21</time>                        
                    </li>
                    <li>
                        <a href="#">KPL时光机：“八胖军团”QGhappy的童年时代</a>
                        <time>09/21</time>                                                
                    </li>
                    <li>
                        <a href="#">KPL时光机：“八胖军团”QGhappy的童年时代</a>
                        <time>09/21</time> 
                    </li>
                    <li>
                        <a href="#">KPL时光机：“八胖军团”QGhappy的童年时代</a>
                        <time>09/21</time> 
                    </li>
                    <li>
                        <a href="#">KPL时光机：“八胖军团”QGhappy的童年时代</a>
                        <time>09/21</time> 
                    </li>
                    <li>
                        <a href="#">KPL时光机：“八胖军团”QGhappy的童年时代</a>
                        <time>09/21</time> 
                    </li>
                    <li>
                        <a href="#">KPL时光机：“八胖军团”QGhappy的童年时代</a>
                        <time>09/21</time> 
                    </li>
                    <li>
                        <a href="#">KPL时光机：“八胖军团”QGhappy的童年时代</a>
                        <time>09/21</time> 
                    </li>
                    <li>
                        <a href="#">KPL时光机：“八胖军团”QGhappy的童年时代</a>
                        <time>09/21</time> 
                    </li>
                    {this.state.ishide?'':<p>上拉加载更多</p>}
                    {/* {this.state.data} */}
                    <div dangerouslySetInnerHTML={{
                        __html: this.state.data,
                    }}></div>
                </ul>
                        
            </div>
        )
    }
}

MatchComponent.defaultProps={
    
}

export default MatchComponent;