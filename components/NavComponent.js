
import NavMoreComponent from "./NavMoreComponent"

class NavComponent extends React.Component{
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
            <div id="main_nav">
                <div className="main_nav">
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
                <NavMoreComponent />
            </div>
        )
    }

    
}

NavComponent.defaultProps={
    
}

export default NavComponent;