import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import yes from './assets/img/yes.png';
import no from './assets/img/no.webp';
import defaultPhoto from './assets/img/default_ava.webp';


const ProfileInfo = (props) => {
    if (!props.profilePhoto) {
        return (<Preloader />)
    }
    const contactList = Object.entries(props.userContacts).map(([key, value]) => {
        return {
            platform: key,
            url: value || "No link provided"
        }
    }).filter(contact => contact.url !== "No link provided");

    return (
        <div>
            <div>
                <img className={s.profile_img} src='https://fikiwiki.com/uploads/posts/2022-02/1644725672_31-fikiwiki-com-p-krasivie-kartinki-futbolnoe-pole-36.jpg' />
            </div>
            <div className={s.profileInfo}>
                <img src={!props.profilePhoto.large? defaultPhoto:props.profilePhoto.large} className ={s.profilePhoto}/>
                <div className={s.descriptionBlock}> 
                    <div><h2>{props.userFullName}</h2></div>
                    <div>{props.userInfo}</div>
                    <div>  {contactList.map(contact => (
                        <div key={contact.platform}>
                            <strong>{contact.platform}:</strong> {contact.url}
                        </div>
                    ))}
                    </div>
                    <div className={s.member}> Juventus crew member: <img src = {props.jobStatus ? no:yes} className={s.memberPageImage}/></div>
                    <div>{props.jobStatusDescription}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo