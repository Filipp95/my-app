import React from "react";
import { connect } from "react-redux";
import { userAPI } from "../../api/api";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingProcess, toggleIsFetching, unFollow } from "../../redux/users-page-reducer";
import Preloader from "../Preloader/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
      this.props.setTotalUsersCount(data.totalCount)
      console.log("Users prop in container:", this.props.users);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
    });
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged.bind(this)}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
          users={this.props.users}
          isFetching={this.props.isFetching}
          isFollowProcessing = {this.props.isFollowProcessing}
          toggleFollowingProcess = {this.props.toggleFollowingProcess}
        />
      </>)
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowProcessing: state.usersPage.isFollowProcessing,
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userID) => { dispatch(followAC(userID)) },
//     unFollow: (userID) => { dispatch(unFollowAC(userID)) },
//     setUsers: (users) => { dispatch(setUsersAC(users)) },
//     setCurrentPage: (currentPage) => { dispatch(setCurrentPageAC(currentPage)) },
//     setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCountAC(totalCount)) },
//     toggleIsFetching: (isFetching) => {dispatch (toggleIsFetchingAC(isFetching))},
//   }
// }

export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProcess})(UsersContainer)


