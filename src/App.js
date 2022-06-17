import {Routes, Route} from "react-router-dom";
import HeaderContainer from "./Pages/Header/HeaderContainer";
import Nav from "./Pages/Nav/Nav";
import HomePageContainer from "./Pages/HomePage/HomePageContainer";
import './App.css';
import MessagesPage from "./Pages/MessagesPage/MessagesPage";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Nav />
      <main>
        <Routes>
            <Route index element={<HomePageContainer/>} />
            <Route path='/message' element={<MessagesPage/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

