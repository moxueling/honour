
import Fetch from "../modules/fetch"

import BannerComponent from "./bannerComponent"

import Hotvideo from "./hot_video"

import Herostra from "./hero_stra"

class StraComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            flag : 2
        }
    }
    render(){
        return(
            <div id="stra">
                <div id = "search">
                    <input className="input1" type="text" onclick="" placeholder="搜搜你想要的内容"/>
                </div>
                <BannerComponent flag = {this.state.flag} />
                <Hotvideo/>
                <Herostra/>
            </div>
        )
    }
}

StraComponent.defaultProps={
    
}

export default StraComponent;