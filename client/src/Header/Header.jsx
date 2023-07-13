import { useContext, useEffect, useState } from "react";

import HeaderMenuElement from "./MenuElement/HeaderMenuElement";
import CustomButton from "../CustomButton/CustomButton";
import HeaderUserInfo from "./UserMenuElement/HeaderUserInfo";

import "./Header.css";
import logo from "../assets/logo.png";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { getCreditials } = useContext(UserContext);

  const [{ userId, userName, isAuth }, setUserData] = useState({
    userId: null,
    userName: null,
    isAuth: false,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function setData() {
      const { userId, userName, isAuth } = await getCreditials();

      setUserData({
        userId: userId,
        userName: userName,
        isAuth: isAuth,
      });

      setIsLoaded(true);
    }

    setData();
  }, []);

  let navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={logo} alt="logo" className="header__logo" />

        <div className="header__menu">
          <HeaderMenuElement> How it works? </HeaderMenuElement>
          <HeaderMenuElement> Features </HeaderMenuElement>
          <HeaderMenuElement> About us </HeaderMenuElement>
          {isLoaded ? (
            isAuth ? (
              <HeaderUserInfo userId={userId} userName={userName} />
            ) : (
              <CustomButton
                color="white"
                blockName="header"
                onClick={() => navigate("login")}
              >
                Login
              </CustomButton>
            )
          ) : (
            "Loading..." // need to make custom preloader
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
