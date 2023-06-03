import { createContext } from 'react'

export const UserContext = createContext()

export function UserContextProvider({ children }) {

    function getCreditials() {
        return {
            userId: "id-888-999-000",
            userName: "Vladimir",
            isAuth: false
        }
    }

    const contextValue = {
        getCreditials
    }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}