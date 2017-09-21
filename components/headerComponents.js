
import Store from "../modules/flux/store"
import action from "../modules/flux/actionCreator"

class Header extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            path:Store.getpath()
        }
    }
    updatapath(path){
        action.updatapath(path)
    }
    componentWillMount(){
        let that=this
        Store.addChangeListener(function(){
            that.state.path=Store.getpath()
        })
    }
    render(){
        return(
            <div>
                <h1 className="home_top">
                    <h4 className="home_logo">
                        <img src="//game.gtimg.cn/images/yxzj/m/m201606/cp/logo.png" alt=""/>
                        <div>
                            <span>王者荣耀</span>
                            <span>王者相见，打成一片</span>
                        </div>
                    </h4>
                    <a href="#" className="home_load">

                    </a>
                </h1>
                <ul className="home_nav">
                    <li onClick={this.updatapath.bind(this,"main")}><a href="#/main" className={this.state.path=="main"?"active":""}>首页</a></li>
                    <li onClick={this.updatapath.bind(this,"stra")}><a href="#/stra" className={this.state.path=="stra"?"active":""}>攻略中心</a></li>
                    <li onClick={this.updatapath.bind(this,"match")}><a href="#/match" className={this.state.path=="match"?"active":""}>赛事中心</a></li>                        
                </ul>
            </div>
        )
    }
}

export default Header;