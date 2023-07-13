import { createContext } from "react";
import { useCookies } from "react-cookie";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(["userId"]);

  function getCookieExpireDate() {
    let date = new Date();
    date.setFullYear(date.getFullYear() + 1);

    return date;
  }

  async function getCreditials() {
    let userId = cookies.userId;

    console.log(userId);

    if (!userId) {
      return {
        isAuth: false,
      };
    }

    let response = await fetch(
      `https://localhost:7094/api/users/get_user/${userId}`
    );

    let user = await response.json();

    return {
      userId: user.id,
      userName: user.name,
      isAuth: true,
    };
  }

  async function loginUser(email, password) {
    const response = await fetch("https://localhost:7094/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return;
    }

    let userId = await response.json();

    console.log({ userId });

    setCookie("userId", userId, {
      expires: getCookieExpireDate(),
    });

    return userId;
  }

  async function registrateUser(email, password, name) {
    let response = await fetch("https://localhost:7094/api/users/registrate", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return;
    }

    let user = await response.json();
    let userId = user.id;

    console.log({ userId });

    setCookie("userId", userId, {
      expires: getCookieExpireDate(),
    });

    return userId;
  }

  async function isUserExist() {
  }

  const contextValue = {
    getCreditials,
    loginUser,
    registrateUser,
    isUserExist
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
