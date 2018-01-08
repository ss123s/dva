import React from 'react';
import Content from './content/content';
import Header from '../header/header';
import Menus from '../menu/menu';
function ViewUi () {
  return (
    <div>
    <Header />
     <div style={{display:'flex'}}>       
       <Menus/>
       <Content />
     </div>
    </div>
  )
}

export default ViewUi;
