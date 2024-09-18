import { connect } from "react-redux";
import Friends from "./Friends";

const mapStateToProps = (state) => {
    return {
        sideBarPage: state.sideBar.friends
    }
};

const FriendsContainer = connect (mapStateToProps)(Friends)

export default FriendsContainer
