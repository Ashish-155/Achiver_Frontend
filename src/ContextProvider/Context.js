import React, { createContext, useState } from 'react'


export const LoginContext = createContext("");

// Second context
export const GoalDataContext = createContext("");

const Context = ({ children }) => {

    const [logindata, setLoginData] = useState("");
    const [goalDataContext, setGoalDataContext] = useState("");

    return (
        <>
            <LoginContext.Provider value={{ logindata, setLoginData }}>
                <GoalDataContext.Provider value={{ goalDataContext, setGoalDataContext }}>
                    {children}
                </GoalDataContext.Provider>
            </LoginContext.Provider>
        </>
    )
}

export default Context