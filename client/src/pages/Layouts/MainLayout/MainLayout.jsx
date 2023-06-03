import { Outlet } from 'react-router-dom'
import Header from '../../../Header/Header'

import zigzagImg from '../../../assets/zigzag2.svg'
import './MainLayout.css'

export function MainLayout() {
    return (
        <>
            <Header />
            
            <main className='container_main' >
                <Outlet />
                <img src={zigzagImg} alt="" className="container_main__zigzag" />
            </main>
        </>
    )
}