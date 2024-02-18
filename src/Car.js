import React from "react"
class Car extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={}
    }
    render()
    {
      return (<div> <img src={this.props.image} />
              <h1> Brand Name: {this.props.brand} </h1>
              <h2> Color is: {this.props.color} </h2>
              <h3> Car description : {this.props.desc}</h3>
                </div>)
    }
                                }
 export default Car;