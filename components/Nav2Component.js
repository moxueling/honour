
import NavMoreComponent from "./NavMoreComponent"

class Nav2Component extends React.Component{
    
    constructor(props,context){
        super(props,context)
        this.state={
            ismore : false
        }
    }

    // componentWillReceiveProps(props,state){
    //     this.setState({
    //         ismore : this.refs.navmore.state.ismore
    //     })
    // }

    render(){
        return(
            <div id="main_nav2">
                <div className="main_nav2">
                    <a href="#" className = "">
                        <i></i>
                        <span>爆料展</span>
                    </a>
                    <a href="#">
                        <i></i>                    
                        <span>故事会</span>
                    </a>
                    <a href="#">
                        <i></i>   
                        <span>周边商城</span>
                    </a> 
                    <a href="#">
                        <i></i>   
                        <span>爆料展</span>
                    </a>
                </div>
                <div className="main_nav2">
                    <a href="#" className = "">
                        <i></i>
                        <span>新人专区</span>
                    </a>
                    <a href="#">
                        <i></i>                    
                        <span>文化站</span>
                    </a>
                    <a href="#">
                        <b>...</b>   
                        <span>敬请期待</span>
                    </a> 
                    <a href="#">
                        <b></b>   
                        <span></span>
                    </a>
                </div>
                <NavMoreComponent />
            </div>
        )
    }
    
}

Nav2Component.defaultProps={
    
}

export default Nav2Component;