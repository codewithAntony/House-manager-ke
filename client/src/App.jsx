import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import ForgotPassword from './components/ForgotPassword';

function App() {
    return (
        <Router>
            <Main />
        </Router>
    );
}

const Main = () => {
    const location = useLocation();

    // define the routes that won't display the header components
    const noHeaderRoutes = ['/reset'];
    return (
        <>
            {/* conditionally render the headers */}
            {!noHeaderRoutes.includes(location.pathname) && <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="/reset" element={<ForgotPassword />} />
            </Routes>
        </>
    );
};

export default App;
