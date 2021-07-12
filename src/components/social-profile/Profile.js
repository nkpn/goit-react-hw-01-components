import React from 'react';
// import user from './user.json';
import style from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
        < div className={style.profile} >
            <div className="description">
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={style.avatar}
                />
                <p className={style.name}>{name}</p>
                <p className={style.tag}>{tag}</p>
                <p className={style.location}>{location}</p>
            </div>

            <ul className={style.stats}>
                <li className={style.list}>
                    <span className={style.label}>Followers </span>
                    <span className={style.quantity}>{stats.followers}</span>
                </li>
                <li className={style.list}>
                    <span className={style.label}>Views </span>
                    <span className="quantity">{stats.views}</span>
                </li>
                <li className={style.list}>
                    <span className={style.label}>Likes </span>
                    <span className={style.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div >
    )
}

Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats:PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes:PropTypes.number.isRequired,
    }).isRequired,
}

export default Profile;