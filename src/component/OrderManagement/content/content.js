import React,{Component} from 'react';
import cont from  './contents.css';
import Allorders  from './contents/allorders';
import Waitinglis  from './contents/waitinglist';
import Chargeback from  './contents/chargeback';
import Reconsider  from './contents/reconsider';


export default class Cont  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs:[
        {tabName:"全部订单",id:1},
        {tabName:"待结单",id:2},
        {tabName:"退单",id:3},
        {tabName:"复议订单",id:4}
      ],
      currentIndex:1,
    }
    this.tabChoiced = this.tabChoiced.bind(this);
  }
  tabChoiced =(id)=>{
    this.setState({
      currentIndex:id
    });
  }

  render(){
   let that = this;
   let tabList = this.state.tabs.map((tabs,index) =>{
      let tabStyle = tabs.id === this.state.currentIndex ? 'subCtrl active' : 'subCtrl';
      return <li key={index}  onClick={this.tabChoiced.bind(that,tabs.id)} className={tabStyle}>{tabs.tabName}</li>
   });
  	let _Index = this.state.currentIndex;
    return (
      <div style={{width:'100%'}} className={cont.conts}>
        <ul className="listUl" >
          {tabList}
        </ul>
        <div>
        	{_Index===1?<Allorders/>:null}
        	{_Index===2?<Waitinglis/>:null}
        	{_Index===3?<Chargeback/>:null}
        	{_Index===4?<Reconsider/>:null}
        </div>
      </div>
    )
  }
}



