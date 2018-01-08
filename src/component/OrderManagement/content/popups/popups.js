import React, {Component} from 'react';
import pop from './popups.css';
/*
*
* 父传子来显示订单
* 点击close
*
* */
class Pops extends Component {
  constructor (props) {
    super(props);
  }
  ClickHides=()=>{
    this.props.fun(0);
  }
  render (){
    return (
      <div className="showBottom">
        <div style={{position:'relative',height:'40px',width:'100%'}} >
          <i className={pop.close} onClick={this.ClickHides}>X</i>
        </div>
        <div style={{lineHeight:'100px'}}>您有新的订单</div>
      </div>
    )
  }


}



export default Pops;


