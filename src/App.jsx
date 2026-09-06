import { useDispatch, useSelector } from "react-redux";

import UserSection from "./components/UserSection";
import { selectTheme, toggleTheme } from "./redux/slices/appSlice";

import "./App.css";

function App() {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    return (
        <main className={`app ${theme}`}>
            <h1>React Redux Toolkit</h1>

            <button
                className="theme-button"
                onClick={() => dispatch(toggleTheme())}
            >
                Switch to {theme === "light" ? "Dark" : "Light"} Theme
            </button>

            <UserSection />
        </main>
    );
}

export default App;
