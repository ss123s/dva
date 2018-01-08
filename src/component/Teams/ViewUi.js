import React from 'react';
import Header from '../header/header';
import Menus from '../menu/menu';
function ViewUi () {
  return (
    <div>
    <Header />
     <div style={{display:'flex'}}>       
       <Menus/>
       团队管理
     </div>
    </div>
  )
}

export default ViewUi;
