import React from 'react';
import { connect } from 'react-redux';
const Dashboard = (props) => {
  let name = ''
  try{
    name = props.auth.displayName
    console.log(props.auth.displayName);
  }
  catch(e){
  }

  
  console.log(props);
  return (
    <div style={{ textAlign: 'center' }}>
    <h3>
     Welcome 
    </h3>
  <h5>{name}</h5>
  </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
