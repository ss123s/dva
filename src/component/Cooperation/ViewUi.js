import React from 'react';
import Header from '../header/header';
import Menus from '../menu/menu';
function ViewUi () {
  return (
    <div>
    <Header />
     <div style={{display:'flex'}}>       
       <Menus/>
       合作商家
     </div>
    </div>
  )
}

export default ViewUi;
