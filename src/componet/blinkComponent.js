import React ,{Component} from 'react';

class BlinkLable extends Component {
    constructor(props) {
      super(props);
      this.state = {
          showlabel: true,
          label: this.props.label
      };
      this.myFunction = this.myFunction.bind(this);
    }
    myFunction(){
      var sLb = ! (this.state.showlabel);
      this.setState({showlabel: sLb});
    }
    render(){
      return (
        <div>
          {(this.state.showlabel)?this.state.label:<span>&nbsp;&nbsp;</span>}
        </div>
       );
    }
    componentDidUpdate() {
       setTimeout(this.myFunction, 1000)
    }
    componentDidMount(){
      setTimeout(this.myFunction, 1000)
    }
  }

  export default BlinkLable;