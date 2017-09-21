
import Fetch from "../modules/fetch"

class BannerComponent extends React.Component{

    constructor(props,context){
        super(props,context)
        this.state={
            url:{},
            mySwiper:null
        }
    }
    showBanner(result){
        let arr=[];
        for(var key in result){
            var url="http://ossweb-img.qq.com/upload/adw/"+result[key][2];
            arr.push(
                <div className="swiper-slide">
                    <img src={url}/>
                </div>
            )
        }
        return arr;
    }
    getBanner(){
        let that=this
        Fetch.Get("http://localhost:3000/ga/time/qqadv/Info_new_15223.js?v=31",function(result){
      //      console.log(result)  
            that.setState({
                url:result,
                
            })
        })
    }
    componentWillMount(){
        this.getBanner()
    }

    render(){
        let {url}=this.state
        return(
            <div className="main_banner">
                <div className="swiper-container main">
                     <div className="swiper-wrapper">
                     
                        {this.showBanner(url)}
                    </div> 
                    
                    <div className="swiper-pagination  banner_pagination" ></div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.state.mySwiper = new Swiper('.main', {
            autoplay: 2000,//可选选项，自动滑动
            pagination : '.swiper-pagination',
        })
    }
    componentDidUpdate(){
        this.state.mySwiper.update()
    }
}

export default BannerComponent;