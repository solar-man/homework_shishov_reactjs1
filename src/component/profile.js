import { Avatar } from "@material-ui/core";
import { useCallback } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
    const profile = useSelector(store => store.profile);

    const renderUserParam = useCallback((param) =>
        <li>
            {param}: {profile[param]} <br /><br />
        </li>
        , [profile]);

    return (
        <div className="app__field">
            <div className="data__field">
                <div className='profile'>
                    <Avatar className='profile__avatar'></Avatar>
                    <ul className='profile__list'>
                        {Object.keys(profile).map(renderUserParam)}
                    </ul>
                </div>
            </div>
        </div >
    );
}