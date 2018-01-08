import React,{Component} from 'react';
import conts from  '../contents.css';
import Pops from '../popups/popups';
export default class AllOrders extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}


	render(){
		return (
			<div className={conts.pop}>
				<div className={conts.letEf}>
					全部订单出现了
          <button>点击我</button>
				</div>
				<Pops />
			</div>
		)
	}
}
