import React,{Component} from 'react';
import conts from  '../contents.css';
import Pops from '../popups/popups';

export default class AllOrders extends Component {
	constructor(props) {
		super(props);
		this.state = {numbs:2}
	}
  ClickShow=()=>{
      this.setState({
        numbs:2
      })
  }
  ClickHide = (a)=>{
	  let aa = a;
    this.setState({
      numbs: aa
    })
  }
	render(){
		return (
			<div className={conts.pop}>
				<div className="letEf">
					全部订单出现了
          <button onClick={this.ClickShow}>点击我显示</button>
          <button onClick={this.ClickHide}>点击隐藏</button>
				</div>
        {this.state.numbs>0 ? <Pops  fun={this.ClickHide}/>:null}
			</div>
		)
	}
}
