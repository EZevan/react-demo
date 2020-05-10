import React from "react";
import Home from "./home";
import MyNavi from "./myNavi";

class App extends React.Component{
    render(){
        const navi1 = ["首页","配置","中心"];
        const navi2 = ["首页","配置","中心"];
        return(

            <div>
                <h1>Hello React!</h1>
                <h2>Hello React Component!</h2>
                <Home />
                <MyNavi navi={ navi1 } />
                <MyNavi navi={ navi2 } />
            </div>
        )
    }
}

export default App