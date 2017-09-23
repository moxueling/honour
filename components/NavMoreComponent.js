
import store from "../modules/flux/store"
import action from "../modules/flux/actionCreator"

class NavMoreComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            ismore : store.getisMore() //展开    true 收起
        }
    }
    getMore(){
        let more = !this.state.ismore;
        this.setState({
            ismore : more
        })
        action.updataismore(more);
        
    }
    render(){
        // console.log(this.state)
        return(
            <div onClick={this.getMore.bind(this)}  className="main_nav-more">
                <span></span>
                <b>{this.state.ismore?"收起":"展开"}</b>
            </div>
        )
    }
}

NavMoreComponent.defaultProps={
    
}

export default NavMoreComponent;