import { Routes, Route } from "@solidjs/router";
import Auth from "./pages/auth";
import Main from "./pages/main";

const App = () => {
    return (
        <div class="w-100% h-100%">
            <Routes>
                <Route path="/" component={Auth} />
                <Route path="/main" component={Main} />
            </Routes>
        </div>
    );
};

export default App;
