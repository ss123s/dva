import React , {Component} from 'react';
import Child from '../component/test';
 class Test extends Component {
  constructor (props) {
    super(props);
    this.state = {sendCount: 0};
  }

  render(){

    return (
      <div>
        <p>父组件</p>

      </div>
    )
  }
}
export default Test;
