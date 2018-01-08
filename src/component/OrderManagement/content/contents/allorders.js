import React,{Component} from 'react';
import conts from  '../contents.css';
import Pops from '../popups/popups';

export default class AllOrders extends Component {
	constructor(props) {
		super(props);
		this.state = {keys:1}
	}
  ClickShow=(props)=>{
      this.setState({
        keys: this.state.keys+1
      })
  }
	render(){
	  let keys = this.state;
	  console.log(keys);
		return (
			<div className={conts.pop}>
				<div className={conts.letEf}>
					全部订单出现了
          <button onClick={this.ClickShow}>点击我</button>
				</div>
				 <Pops keys={this.props.keys} />{keys>=1 ?2:null}
			</div>
		)
	}
}
