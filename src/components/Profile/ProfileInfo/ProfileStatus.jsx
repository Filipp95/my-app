import React from "react";
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        console.log("this:", this)
        this.setState({
            editMode:true
        })
    }
    
    onStatusChange = (e) => {
       this.setState({
        status: e.currentTarget.value
       }) 
    }

    deActivateEditMode = () => {
        this.setState({
         editMode:false
        })
        this.props.updateStatusTC(this.state.status);
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            return (
            this.setState({
                state: this.props.state
            })
        )
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} className={s.profile_status}>{this.props.status || '-----'}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur = {this.deActivateEditMode} value={this.state.status} placeholder="What's up tiger?"></input>
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus;