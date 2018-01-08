import React from 'react';
import { connect } from 'dva';
import ViewUi from  '../component/OrderManagement/ViewUi';

function IndexPage() {
  return (
    <div style={{margin:'0 25px',border:'1px solid #797979',overflow:'hidden'}}>
      <ViewUi />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
