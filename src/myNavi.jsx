import React from "react";

export default class MyNavi extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    {
                        this.props.navi.map( (element,index) =>{
                            return <li key={index}>{ element }</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}