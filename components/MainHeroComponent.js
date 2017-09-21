
import Fetch from "../modules/fetch"

class MainHeroComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            hot:[],
            hero:[]
        }
    }
    showHero(){
        let arr=[];
        let hot=this.state.hot
        if(!this.props.type){
            for(var i=0,len=hot.length;i<len;i++){
                this.state.hero.forEach((item)=>{
                    if(hot[i]==item.ename){
                        let url='//game.gtimg.cn/images/yxzj/img201606/heroimg/'+item.ename+'/'+item.ename+".jpg"
                        arr.push(
                            <figure className="pull-left">
                                <img src={url}/>
                                <figcaption>{item.cname}</figcaption>
                            </figure>
                        )
                    }
                    
                })
            }    
        }else{
            this.state.hero.forEach((item)=>{
                if(this.props.type==item.hero_type){
                    let url='//game.gtimg.cn/images/yxzj/img201606/heroimg/'+item.ename+'/'+item.ename+".jpg"
                    arr.push(
                        <figure className="pull-left">
                            <img src={url}/>
                            <figcaption>{item.cname}</figcaption>
                        </figure>
                    )
                }
                
            })
        }
        
        return arr;
    }
    getHot(){
        let that=this
        Fetch.JsonpF("http://localhost:3000/php/ingame/smoba/top_heros.php?partition=1119&roleid=90876401&area=1&physicalID=1&algorithm=v2&version=2.14.6a&timestamp=1493112232746&appid=1104466820&sig=11a92c24e8f0d1fc74e31bb8c5203a09&encode=2&msdkEncodeParam=E5CB3C064B7A772867B1B552594434FCA26621A002CCB5AF47407E70297E2D6EE7962AC5C4D05234943B0144EDFBDCC4C2A285820C8983E5DE4E22B38EF167CCCA62220D5B3FF8BF83283431B8FF17FB790EDAA0932201873DEC7556F3CFF3AD325B51D6FF5A451618921BA48FF6818B53191FA3C7ED56E51021350FDC66A01CB44BB53178F3C501&game=smoba&start=1&num=10&ordertype=1&filter=0&grade=-1&herotype=0&matchtype=2&callback=jQuery111301155751185527556_1505876128991&_=1505876128992",function(result){
         //   console.log(result)
            let arr=[];
            result.data.herolist.forEach((item)=>{
                arr.push(item.heroid)
            })
            that.state.hot=arr;
            that.getHero()
        })
    }
    getHero(){
        let that=this
        Fetch.Get("http://localhost:3000/qq/web201605/js/herolist.json",function(result){
            that.setState({
                hero:result
            })
         //   console.log(result)
        })
    }
    componentWillMount(){
        if(!this.props.type){
            this.getHot()
        }else{
            this.getHero()
        }
    }
    componentWillReceiveProps(props,state){
        
    }
//     <div className="hreo">
//     {this.showHero()}
// </div>
    render(){
        return(
            <div className="swiper-slide">
                {this.showHero()}
            </div> 
            
        )
    }
}

MainHeroComponent.defaultProps={

}

export default MainHeroComponent;