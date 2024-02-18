import React from "react"
class Car extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={}
    }
    render()
    {
      return (<div style={{borderStyle: "solid" , borderColor: this.props.color , }} > 
              <img src={this.props.image} />
              <h1> Brand Name: {this.props.brand} </h1>
              <h3> Car description : {this.props.desc}</h3>
                </div>)
    }
                                }
 export default Car;