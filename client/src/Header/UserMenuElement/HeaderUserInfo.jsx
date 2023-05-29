import userImg from '../../assets/user.svg'
import ArrowDownward from '../../assets/arrow-downward.svg'
import './HeaderUserInfo.css'

function HeaderUserInfo({ userName, userId }) {
    let link = `userinfourl/${ userId }`

    return (
        <a className="user-info header__user-info" href={ link }>
            <img src={ userImg } alt="User" className='user-info__image' />

            <div className="user-info__name">
                { userName }

                <img src={ ArrowDownward } alt="arrow" className='user-info__arrow' />
            </div>
        </a>
    )
}

export default HeaderUserInfo