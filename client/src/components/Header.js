import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link ,Redirect} from 'react-router-dom';

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [<li key="1"><a href="/auth/google">Login With Google</a></li>,
        <li key="2"><a href="/auth/facebook">Login With Facebook</a></li>
      ]
      default:
       
        return [
          <li key="2"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
         
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/home' : '/'}
            className="left brand-logo"
          >
            ERN
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>

        {this.props.auth ? <Redirect to={{ pathname: '/home'}} /> : ''}
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
