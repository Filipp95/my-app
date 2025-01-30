import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { followTC, getUsersThunkCreator, unFollowTC } from "../../redux/users-page-reducer";
import Preloader from "../Preloader/Preloader";
import Users from "./Users";


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged.bind(this)}
          users={this.props.users}
          isFetching={this.props.isFetching}
          isFollowProcessing={this.props.isFollowProcessing}
          toggleFollowingProcess={this.props.toggleFollowingProcess}
          followTC={this.props.followTC}
          unFollowTC={this.props.unFollowTC}
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

export default compose(connect(mapStateToProps, { getUsers: getUsersThunkCreator, followTC, unFollowTC }))(UsersContainer) 

