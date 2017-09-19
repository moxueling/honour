
class RootComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={

        }
    }
    render(){
        return(
            
            <div id="root">
                {this.props.children}
            </div>
        )
    }
}

RootComponent.defaultProps={
    
}

export default RootComponent;