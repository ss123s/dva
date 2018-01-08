import React from 'react';
import viewui from './header.css';
const Header =  () =>{
	return (
			<div className={viewui.header} >
        <h1 className={viewui.topTitle}>物流系统后台</h1>
        <a className={viewui.quit}>退出登录</a>
      </div>
	)
}
Header.propTypes = {

};

export default Header;
