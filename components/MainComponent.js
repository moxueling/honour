
import Fetch from "../modules/fetch"
import BannerComponent from "./bannerComponent"
import MainHeroComponent from "./MainHeroComponent"
import MainAudioComponent from "./MainAudioComponent"
import MainTuComponent from "./MainTuComponent"

class MainComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            data:{},
            url:"",
            herotype:0,
            mySwiperhero:null,
            mySwiperaudio:null,
            mySwipertu:null
        }
    }
   changeType(t){
        this.setState({
            herotype:t
        })
   }
   showhero(){
       let that =this
       let arr=[];
       for(var i=0;i<7;i++){
        //   that.state.herotype=i;
           arr.push(
            <MainHeroComponent type={i} />
           )
       }
       return arr;
   }
   showaudio(){
        let that =this
        let arr=[];
        for(var i=0;i<4;i++){
            arr.push(
                <MainAudioComponent type={i}/>
            )
        }
        return arr;
    }
    showtu(){
        let that =this
        let col=[0,103,111,77,76]
        let arr=[];
        for(var i=0;i<5;i++){
            arr.push(
                <MainTuComponent type={i} cid={col[i]} swiper={this.state.mySwipertu}/>
            )
        }
        return arr;
    }
    componentWillMount(){
        let that=this
       
       
    }
    componentDidMount(){
        let that=this;
        let colhero=["热门","战士","法师","坦克","刺客","射手","辅助"]
        let colaudio=["精彩栏目","英雄攻略","赛事精品","赛事视频"]
        let coltu=["最新","英雄","新手","官方","同人"]
        this.state.mySwiperhero = new Swiper('.hero', {
            paginationClickable: true,
             pagination : '.swiper-pagination',
            autoHeight: true,
            paginationBulletRender: function (swiper, index, className) {
                return '<li class="pull-left ' + className + '">'+colhero[index]+'</li>';
            }
        })
        this.state.mySwiperaudio = new Swiper('.audio-box', {
            paginationClickable: true,
             pagination : '.swiper-pagination',
         //   autoHeight: true,
            paginationBulletRender: function (swiper, index, className) {
                return '<li class="pull-left ' + className + '">'+colaudio[index]+'</li>';
            }
        })
        this.state.mySwipertu = new Swiper('.tu-box', {
            paginationClickable: true,
            pagination : '.swiper-pagination',
            autoHeight: true,
            paginationBulletRender: function (swiper, index, className) {
                return '<li class="pull-left ' + className + '">'+coltu[index]+'</li>';
            }
        })
        //  setTimeout(()=>{
        //      this.setState({
        //          herotype:0
        //      })
        //  },1000)
        
        function fn(){
            var i=1;
            that.state.height=document.body.scrollTop+document.documentElement.clientHeight;
            that.state.pageheight=document.documentElement.scrollHeight;
            
            if(that.state.height==that.state.pageheight){ 
                i++;
                that.setState({
                    herotype:0
                })
            }
        }
         window.addEventListener("scroll",fn)
    }
   
    componentDidUpdate(){
        console.log(1)
        this.state.mySwiperhero.update()
        this.state.mySwiperaudio.update()
        this.state.mySwipertu.update()
        
    }
    render(){
        return(
            <div id="main">
                <BannerComponent/>
                {/*新闻资讯  */}
                <div className="card">
                    <div className="card-header"><p>新闻资讯<a href="#" className="pull-right">...</a></p></div>
                    <div className="card-content">
                        <ul>
                            <li className="pull-left active">热门</li>
                            <li className="pull-left">新闻</li>
                            <li className="pull-left">公告</li>
                            <li className="pull-left">活动</li>
                            <li className="pull-left">赛事</li>
                        </ul>
                        <ol>
                            <li><strong>[赛事]</strong><span>|王者电竞路：95后强力指挥RNGM.Yixiao</span><i>09/20</i></li>
                            <li><strong>[赛事]</strong><span>|王者电竞路：95后强力指挥RNGM.Yixiao</span><i>09/20</i></li>
                            <li><strong>[赛事]</strong><span>|王者电竞路：95后强力指挥RNGM.Yixiao</span><i>09/20</i></li>
                            <li><strong>[赛事]</strong><span>|王者电竞路：95后强力指挥RNGM.Yixiao</span><i>09/20</i></li>
                            <li><strong>[赛事]</strong><span>|王者电竞路：95后强力指挥RNGM.Yixiao</span><i>09/20</i></li>
                        </ol>
                    </div>
                </div>
                {/* 英雄列表 */}
                <div className="card">
                    <div className="card-header">
                        <p>英雄列表<a href="#" className="pull-right">...</a></p>
                        <h3><img src="http:////ossweb-img.qq.com/upload/webplat/info/yxzj/20170823/273191178798101.jpg" alt=""/></h3>
                    </div>
                    <div className="card-content">
                        <div className="swiper-container hero">
                        <ul className="swiper-pagination" ></ul>
                            <div className="swiper-wrapper">
                                {this.showhero()}
                            </div>
                        </div>
                    </div>
                </div>
                {/* 精彩视频 */}
                <div className="card">
                    <div className="card-header"><p>精彩视频<a href="#" className="pull-right">...</a></p></div>
                    <div className="card-content">
                        <div className="swiper-container audio-box">
                        <ul className="swiper-pagination" ></ul>
                            <div className="swiper-wrapper">
                                {this.showaudio()}
                            </div>

                        </div>
                    </div>
                </div>

                <div className="card" id="bottom">
                    <div className="card-header"><p>图文攻略<a href="#" className="pull-right">...</a></p></div>
                    <div className="card-content">
                        <div className="swiper-container tu-box">
                        <ul className="swiper-pagination" ></ul>
                            <div className="swiper-wrapper">
                                {this.showtu()}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

MainComponent.defaultProps={
    
}

export default MainComponent;