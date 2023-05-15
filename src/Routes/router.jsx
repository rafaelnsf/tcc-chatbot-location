import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { MainPage } from '../Pages/Main';
import { HomePage } from '../Pages/Home';
import { ChatPage } from '../Pages/Chat';
import WarningAvailableDesktopPage from '../Pages/WarningAvailableDesktop';


const RouterFile = () => {
    const theme = useTheme();
    const responsive = useMediaQuery(theme.breakpoints.down('sm'));

    return responsive ? (
        <Router>
            <Routes>
                <Route element={<MainPage />}>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='chat' element={<ChatPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
                {/* <Route exact path="" element={<LoginPage />} />
                <Route exact path='login' element={<LoginPage />} />
                <Route element={<DashboardPage />}>
                    <Route exact path='financial' element={<BuildingPage />} />
                    <Route exact path='marketing' element={<BuildingPage />} />
                    <Route exact path='creditcard' element={<BuildingPage />} />
                    <Route exact path='home' element={<HomePage />} />
                    <Route exact path='page1' element={<Page1 />} />
                    <Route exact path='booking' element={<BookingPage />} />
                    <Route exact path='user' element={<UserPage />} />
                    <Route exact path='pendinganalyze' element={<PendingAnalyzePage />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} /> */}
            </Routes>
        </Router>

    ) : (
        <Router>
            <Routes>
                <Route path='*' element={<WarningAvailableDesktopPage />} />
            </Routes>
        </Router>
    )


}

export default RouterFile;
