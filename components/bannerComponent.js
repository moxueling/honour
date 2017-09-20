


class BannerComponent extends React.Component{

    

    render(){
        return(
            <div className="main_banner">
                <div className="swiper-container main">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="http://ossweb-img.qq.com/upload/adw/image/1505735035/1505735035.jpg?_r=1505787274"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="http://ossweb-img.qq.com/upload/adw/image/1505785960/1505785960.jpg?_r=1505787274"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="http://ossweb-img.qq.com/upload/adw/image/1505787259/1505787259.jpg?_r=1505787274"/>
                        </div>
                    </div>
                    <div className="swiper-pagination  banner_pagination" ></div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: 2000,//可选选项，自动滑动
            pagination : '.swiper-pagination',
        })
    }
}

export default BannerComponent;