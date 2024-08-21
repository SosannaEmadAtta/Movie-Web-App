import React from "react";
import AppRoute from "../src/router/router.jsx";
import { WatchlistProvider } from './context/WatchlistContext';

function App() {
    return (
        <WatchlistProvider>
            <div className="App">
                <AppRoute />
            </div>
        </WatchlistProvider>
    );
}

export default App;
