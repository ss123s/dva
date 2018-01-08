import React,{Component} from 'react';
import {Link } from 'dva/router';
import menus from './menu.css';
export default class Menu extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
  render(){
    return (
      <ul className={menus.lside} >
        <Link to="/" ><li className={menus.sideMenu} >订单管理</li></Link>
		<Link to="/logistics" ><li className={menus.sideMenu}>物流管理</li></Link>
        <Link to="/cooperation"  ><li className={menus.sideMenu}>合作商家</li></Link>
        <Link to="/teams"  ><li className={menus.sideMenu}>团队管理</li></Link>
        <Link to="/MyCenter" ><li className={menus.sideMenu}>个人中心</li></Link>
      </ul>
    )
  }
}
