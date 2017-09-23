
import Fetch from "../modules/fetch"

class Hotvideo extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            data:{},
            isshow:false
        }
    }

    getData(){
        var that = this;
        Fetch.Get("http://localhost:3000/abc/wmp/data/js/v3/WMP_RANKLIST_GW_18.js?_=1506054022331",function(obj){
        //    console.log(obj)
           that.setState({
                data : obj.msg,
           })  
        })
    }

    componentWillMount(){
        this.getData();

    }

    get(arr){
        let col = []; 
        if(arr!=[]){
            for(var i=1;i<arr.length;i++){
                col.push(<li className="list_"><p>{i+1}.{arr[i].sTitle}</p><span>{arr[i].iTotalPlay}</span></li>)
            }
        }        
        
        return col
    }

    componentDidMount(){
        let arr = ['日','周','月']
        var mySwiper = new Swiper('.hot_video', {
            pagination : '.swiper-pagination',
            paginationClickable :true,
            paginationBulletRender: function (swiper, index, className) {
                return '<span class="' + className + '">' + arr[index] + '</span>';
            }
        })
    }

    isShow(){
        let isshow = this.state.isshow;

        this.setState({
            isshow  : !isshow
        })
        
        let elem =document.getElementsByClassName('hot_video')[0];
        if(this.state.isshow ){
            elem.style.height = "4.4rem";
        }else{
            elem.style.height = "2.05rem";            
        }
    }

    render(){
        
        let listObj = this.state.data;
        return(
            <div id="hot_video">
                
                <div className="swiper-container hot_video">
                    <h3>热门视频</h3>
                    <div className="swiper-pagination pagination_hot"></div>
                    <div className="swiper-wrapper ">
                        <div className="swiper-slide">
                            <ul>
                                <li className="first_li">
                                    <img src={listObj.dpvlist?listObj.dpvlist[0].sIMG:""}/>
                                    <div className="li_text">
                                        <p>1.{listObj.dpvlist?listObj.dpvlist[0].sTitle:""}</p>
                                        <h6>
                                            <span>{listObj.dpvlist?listObj.dpvlist[0].iTotalPlay:""}</span>
                                            <span>{listObj.dpvlist?listObj.dpvlist[0].iTime:""}</span>
                                        </h6>
                                    </div>
                                </li>

                                {listObj.dpvlist?this.get(listObj.dpvlist):''}
                            </ul>
                        </div>
                        <div className="swiper-slide">
                        <ul>
                            <li className="first_li">
                                <img src={listObj.mpvlist?listObj.wpvlist[0].sIMG:""}/>
                                <div className="li_text">
                                    <p>1.{listObj.mpvlist?listObj.wpvlist[0].sTitle:""}</p>
                                    <h6>
                                        <span>{listObj.mpvlist?listObj.wpvlist[0].iTotalPlay:""}</span>
                                        <span>{listObj.mpvlist?listObj.wpvlist[0].iTime:""}</span>
                                    </h6>
                                </div>
                            </li>

                            {listObj.wpvlist?this.get(listObj.wpvlist):''}
                        </ul>
                        </div>
                        <div className="swiper-slide">
                        <ul>
                            <li className="first_li">
                                <img src={listObj.mpvlist?listObj.mpvlist[0].sIMG:""}/>
                                <div className="li_text">
                                    <p>1.{listObj.mpvlist?listObj.mpvlist[0].sTitle:""}</p>
                                    <h6>
                                        <span>{listObj.mpvlist?listObj.mpvlist[0].iTotalPlay:""}</span>
                                        <span>{listObj.mpvlist?listObj.mpvlist[0].iTime:""}</span>
                                    </h6>
                                </div>
                            </li>

                            {listObj.dpvlist?this.get(listObj.dpvlist):''}
                        </ul>
                        </div>
                    </div>
                    
                </div>
                <h5 onClick={this.isShow.bind(this)}>{this.state.isshow?'收起榜单':'查看完整榜单'}</h5>
                
            </div>
        )
    }
}

Hotvideo.defaultProps={
    
}

export default Hotvideo;