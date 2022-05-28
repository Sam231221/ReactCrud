import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Navbar } from "./components/utilities/Navbar";
import { ErrorPage } from "./components/utilities/404Error";
import { Home } from "./components/pages/Home";
import { AddUser } from "./components/users/AddUser";
import { UpdateUser } from "./components/users/UpdateUser";
import ViewUser from "./components/users/ViewUser";


/*
WE have to use Link Component so it takes to another component without page reload.
Don't use component instead use element.
<About></About>
<Contact></Contact>
*/


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path={"/"} element={<Home />}></Route>
          <Route exact path={"/about/"} element={<About />}></Route>
          <Route exact path={"/contact/"} element={<Contact />}></Route>
          <Route exact path={"/users/add/"} element={<AddUser />} />
          <Route exact path={"/users/update/:id/"} element={<UpdateUser />} />
          <Route exact path={"/users/:id/"} element={<ViewUser />} />
          <Route element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
