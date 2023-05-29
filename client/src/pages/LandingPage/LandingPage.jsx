import { useContext } from "react"
import CustomButton from "../../CustomButton/CustomButton"

import arrowImg from '../../assets/arrow-downward.svg'
import peopleImg from '../../assets/people.svg'
import './LandingPage.css'
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"

export function LandingPage() {
    let userContext = useContext(UserContext)
    let navigate = useNavigate()
    
    function redirect() {
        let user = userContext.getCreditials()

        console.log(user)

        if (!user.isAuth) {
            return navigate('/login')
        }

        return navigate('/successfull')
    }

    return (
        <div className="wrapper main__wrapper">
            <div className="info wrapper__info">
                <h1 className="info__title"> 
                    Learn new concepts for each question
                </h1>

                <div className="info__site-description">
                    We help you prepare for exams and quizes 
                </div>

                <div className="interact info__interact">
                    <CustomButton
                        className="interact__start"
                        color='red'
                        blockName='interact'
                        onClick={redirect}
                        shadows > 
                        Start solving
                    </CustomButton>

                    <div className="more interact__more">
                        <img src={arrowImg} alt="" className="more__arrow" />
                        know more
                    </div>
                </div>
            </div>

            <img src={peopleImg} alt="" className="wrapper__image" />
        </div>
    )
}