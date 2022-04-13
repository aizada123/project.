import Header from "./components/structure/Header";
import Main from "./components/Main";
import Smart from "./components/Smart";
import Remember from "./components/Remember";
import Invest from "./components/Invest";
import Download from "./components/Download";
import Footer from "./components/structure/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Smart/>
            <Remember/>
            <Invest/>
            <Download/>
            <Footer/>
        </div>
    );
}

export default App;
