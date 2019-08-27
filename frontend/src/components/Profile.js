import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { profileuser } from '../actions/authentication';


class Profile extends React.Component {
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    
  render() {
  
    return (
      <div>
        gayathri
      </div>
    );
  }

}

Profile.propTypes = {
    profileuser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { profileuser })(Profile)