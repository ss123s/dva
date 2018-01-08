import React from 'react';
import { connect } from 'dva';
import LogisticsChild from  '../component/logistics/logistics';
function Logistics() {
  return (
    <div style={{margin:'0 25px',border:'1px solid #797979',overflow:'hidden'}}>
    <LogisticsChild/>
    </div>
  );
}

Logistics.propTypes = {
};

export default connect()(Logistics);
