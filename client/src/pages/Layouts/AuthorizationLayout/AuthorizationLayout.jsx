import graduateImg from '../../../assets/graduate.svg'
import logo from '../../../assets/logo.png'
import { Outlet } from 'react-router-dom'
import './AuthorizationLayout.css'

export function AuthorizationLayout() {
    return (
        <main className="authorization">
            {/* <div className="authorization__authorization-info-wrapper"> */}
            <div className="authorization__authorization-info authorization-info">
                <img src={logo} alt="" className="authorization-info__logo" />
                <div className="authorization-info__description">
                    <p>Welcome  back!</p>
                    <p>Please login/Signup to your account.</p>
                </div>
                <div className="authorization-interact authorization-info__authorization-interact">
                    <Outlet />
                </div>
            </div>
            {/* </div> */}

            <div className="authorization__image-wrapper">
                <img src={graduateImg} alt="" className="authorization__image" />
            </div>
        </main>
    )
}