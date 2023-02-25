import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import InboxPage from '../pages/InboxPage'
import Hero from '../components/hero'

const MainRoutes = () => {
    return (
        <div>

            <Routes>

                <Route path="/" element={<Hero />} />
                <Route path="/home/*" element={<HomePage />} />
                <Route path="/inbox/*" element={<InboxPage />} />
                {/* <Route path="/orders/*" element={<InboxPage />} /> */}

            </Routes>
        </div>
    )
}

export default MainRoutes
