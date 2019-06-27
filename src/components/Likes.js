import React, { Component } from "react"

export class Likes extends Component {
    state = {
        likes: 1
    };
    increaseLikes =() => {
        this.setState((prevState) => {
            return{
                likes: prevState.likes + 1
            }
        })
    }

    decreaseLikes =() => {
        this.setState((prevState) => {
            return{
                likes: prevState.likes - 1
            }
        })
    }

    reset =() => {
        this.setState({likes:0})
    }    

    render() {
        return(
            <div>
                <h1>
                    Welcome To my Likes App
                </h1>
                <h3>Likes: {this.state.likes}</h3>
                <button onClick={this.increaseLikes}>Like</button>
                <button onClick={this.decreaseLikes}>Unlike</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}
export default Likes