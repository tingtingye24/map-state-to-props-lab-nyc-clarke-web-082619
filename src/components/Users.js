import React, { Component } from 'react';
// add any needed imports here
import {connect} from 'react-redux'
class Users extends Component {

  renderUsers(){
    return this.props.users.map((user,index) => <li key={index}>{user.username}</li>)
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.renderUsers()}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.numberOfUsers}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
