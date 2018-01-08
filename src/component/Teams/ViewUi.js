import React from 'react';
import Header from '../header/header';
import Menus from '../menu/menu';
import Contents from './TeamsManagement/Management'
function ViewUi () {
  return (
    <div>
    <Header />
     <div style={{display:'flex'}}>
       <Menus/>
        <Contents/>
     </div>
    </div>
  )
}

export default ViewUi;
