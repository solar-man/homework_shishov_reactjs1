import React from 'react';
import '../index.css';
import notificationsOff from "../img/notifications_off.png";

const PushToggle = () => {
    return (
        <div className="push">
                <img
                    className="push__image"
                    src={notificationsOff}
                    title="Push Notification"
                    alt="Push Notification"/>
            </div>
    )
}

export default PushToggle;