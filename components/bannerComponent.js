
import Fetch from "../modules/fetch"

class BannerComponent extends React.Component{

    constructor(props,context){
        super(props,context)
        this.state={
           bannerImg :[],
           swiper : null,
        }
    }				
    
    get(arr){
        let col = [];
        if(this.props.flag==1){            
            arr.forEach(function(item,i){
                var imgUrl = "http://ossweb-img.qq.com/upload/adw/"+item;
                col.push(<div className="swiper-slide"><img src={imgUrl}/></div>)
            })
        } else if(this.props.flag==2){
            arr.forEach(function(item,i){
                var imgUrl = item.sIMG;
                col.push(<div className="swiper-slide"><img src={imgUrl}/></div>)
            })
        }
        return col
    }

    getImg(){
        let col = [];
        let arr = [];
        let that = this;
        if(this.props.flag==1){
            Fetch.Get("http://localhost:3000/ga/time/qqadv/Info_new_15223.js?v=48",function(obj){
                for(var  key in obj){
                    arr.push(obj[key][2])
                }  
                that.setState({
                    bannerImg :arr 
                })
            })
        }else if(this.props.flag==2){
            Fetch.Get("http://localhost:3000/abc/wmp/data/js/v3/WMP_VDRECLIST_GW_18_229.js?_=1506055103720",function(obj){
                

                that.setState({
                    bannerImg : obj.msg.reclist_236
                }) 
            })
        }
        
    }

    componentWillMount(){
        this.getImg()
    }

    render(){
        let {bannerImg}=this.state;
        return(
            <div className="main_banner">
                <div className="swiper-container main">
                    <div className="swiper-wrapper">
                        {this.get(bannerImg)}
                    </div>
                    <div className="swiper-pagination  banner_pagination" ></div>
                </div>
            </div>
        )
    }

    componentDidMount(){
         this.state.swiper= new Swiper('.main', {
            autoplay: 2000,//可选选项，自动滑动
            pagination : '.swiper-pagination',
        })
    }

    componentDidUpdate(){
        this.state.swiper.update()
    }
}

export default BannerComponent;