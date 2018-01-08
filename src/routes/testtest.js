import React , {Component} from 'react';
import Child from '../component/test';
 class Test extends Component {
   constructor (props) {
     super(props);
     this.state = {checked:false};
   }

  render(){

    return (
      <div>
        <p>父组件传递数据</p><br/>
        <Child text={"my input"} checked={this.state.checked}/>
      </div>
    )
  }
}
export default Test;
