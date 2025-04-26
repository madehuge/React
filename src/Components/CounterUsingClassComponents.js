import React, {Component} from "react";
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {number:this.props.number}
    }

    Increment() {
         this.setState({ number:this.state.number + 1 })
    }
    Decrement() {
         this.setState({ number:(this.state.number - 1) < 0 ? 0: this.state.number - 1 })
    }
    render() {
        return(
            <>
            <h1>CLass, Props, State Based Counting is : {this.state.number}</h1>
            <span className='CounterIcon' onClick={() => this.Increment()}>+</span>
            <span className='CounterIcon' onClick={() => this.Decrement()}>-</span>
            </>
        )
    }
}

export default Counter