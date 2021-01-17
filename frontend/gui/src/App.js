import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import BaseRouter from './routes';
import 'antd/dist/antd.css'; 
import CustomLayout from './containers/Layout';
import * as actions from './store/actions/auth';

function App(props) {

  React.useEffect(() => {
    props.onTryAutoSignup();
  });
  return (
    <div>
      <Router>
        <CustomLayout {...props}>
          <BaseRouter/>
        </CustomLayout>
      </Router>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () =>  dispatch(actions.authCheckState)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
