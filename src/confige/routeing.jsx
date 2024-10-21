import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home/home'
import AppCheck from '../pages/check/check'
import AppLayout from '../pages/layout/layout'


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path={"/"} element={
                        <AppLayout>
                            <HomePage />
                        </AppLayout>
                    }

                />

                <Route path={"/check"} element={
                    <AppLayout>
                        <AppCheck />
                    </AppLayout>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter