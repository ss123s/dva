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
  render (){
    let act = this.props.keys;
    console.log(act+"a111111");
    return (
      <div className={act}>
        <div style={{position:'relative',height:'40px',width:'100%'}} >
          <i className={pop.close} >X</i>
        </div>
        <div style={{lineHeight:'100px'}}>您有新的订单</div>
      </div>
    )
  }


}



export default Pops;


