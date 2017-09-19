


class Header extends React.Component{
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
                    <li><a href="#" className="active">首页</a></li>
                    <li><a href="#">攻略中心</a></li>
                    <li><a href="#">赛事中心</a></li>                        
                </ul>
            </div>
        )
    }
}

export default Header;