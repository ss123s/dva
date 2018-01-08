import React, {Component} from 'react';
import pop from './popups.css';
/*
*
* 父传子来显示   有新订单
* 点击close后，如果无数据状态就一直隐藏，如果状态更新就显示
*
* */
class Pops extends Component {
  constructor (props) {
    super(props);
    this.state = {display: 'showBottom',sates:'0'};
    this.closes = this.closes.bind(this);
  }
  closes(){
   this.setState( prevState =>({
     display: !prevState.display,
     states: !prevState.states
     })

   )
  }
  render (){
    let act = this.state.display ? 'showBottom' : 'hide';
    let keys = this.state.states ? '0':'1';
    console.log(keys);
    return (
      <div className={act} key={keys}>
        <div style={{position:'relative',height:'40px',width:'100%'}} >
          <i className={pop.close} onClick={this.closes}>X</i>
        </div>
        <div style={{lineHeight:'100px'}}>您有新的订单</div>
      </div>
    )
  }


}



export default Pops;


