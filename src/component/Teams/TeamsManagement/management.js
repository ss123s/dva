import React,{Component} from 'react';
import Dispatch  from './Tab/dispatch';
import Management  from './Tab/management';
import Sendorders from  './Tab/sendorders';
import Crossdock  from './Tab/Crossdock';


export default class Cont  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs:[
        {tabName:"人员调度",id:1},
        {tabName:"人员管理",id:2},
        {tabName:"派单记录",id:3},
        {tabName:"配送站修改资料",id:4}
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
      <div style={{width:'100%'}} >
        <ul className="listUl" >
          {tabList}
        </ul>
        <div>
          {_Index===1?<Dispatch/>:null}
          {_Index===2?<Management/>:null}
          {_Index===3?<Sendorders/>:null}
          {_Index===4?<Crossdock/>:null}
        </div>
      </div>
    )
  }
}



