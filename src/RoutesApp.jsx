import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { HomePage } from './pages/HomePage/HomePage';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { paths } from './paths';
import { CardPage } from './pages/CardPage/CardPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ExitPage } from './pages/ExitPage/ExitPage';
import { NewCardPage } from './pages/NewCardPage/NewCardPage';

export function RoutesApp() {
    
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path={paths.HOME} element={<HomePage />}>
                    <Route path={paths.EXIT} element={<ExitPage />} />
                    <Route path={paths.CARD_ID} element={<CardPage />} />
                    <Route path={paths.NEW_CARD} element={<NewCardPage />} />
                </Route>
            </Route>

            <Route path={paths.LOGIN} element={<LoginPage />} />
            <Route path={paths.REGISTER} element={<RegisterPage />} />
            <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
    )
}