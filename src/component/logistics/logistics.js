import React from 'react';
import Header from '../header/header';
import Menus from '../menu/menu';
function ViewUi () {
  return (
    <div>
    <Header />
     <div style={{display:'flex'}}>       
       <Menus/>
       物流管理
     </div>
    </div>
  )
}

export default ViewUi;
