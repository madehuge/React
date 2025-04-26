import React,{Component} from 'react';

class ClassComponent extends Component {
// We can use State with and without Constructor
// constructor(props) {
//     super(props);

//     this.state = {
//         name:this.props.name,
//         age:this.props.age
//     };
// }

// Here is without Constructor
state = {
        name:this.props.name,
        age:this.props.age
};

onChange() {
    this.setState({
        name: 'Govind',
        age: this.state.age + 1
    });
}

    render() {
        return (
            <>
            <p>Example of Class Props, State</p>
            <button onClick={() => this.onChange()}>Click</button>
            <h1 className="name">{this.props.name}</h1>
            <h1 className="name">{this.state.name} {this.state.age}</h1>
            <h1 className="name">{this.state.name} {this.state.age}</h1>
            {this.props.children}
            </>
        );
    }
}

export default ClassComponent;