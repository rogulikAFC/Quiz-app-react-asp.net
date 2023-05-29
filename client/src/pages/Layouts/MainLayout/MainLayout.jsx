import { Outlet } from 'react-router-dom'
import Header from '../../../Header/Header'

import zigzagImg from '../../../assets/zigzag2.svg'
import './MainLayout.css'

export function MainLayout() {
    return (
        <>
            <Header />
            
            <main className='container' >
                <Outlet />
                <img src={zigzagImg} alt="" className="container__zigzag" />
            </main>
        </>
    )
}