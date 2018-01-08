import React from 'react';
import { connect } from 'dva';
import A from  '../component/Cooperation/ViewUi';
function Logistics() {
  return (
    <div style={{margin:'0 25px',border:'1px solid #797979',overflow:'hidden'}}>   		
   		<A/>
    </div>
  );
}

Logistics.propTypes = {
};

export default connect()(Logistics);
