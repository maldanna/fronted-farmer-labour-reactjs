
import './App.css';
import NavigationBar from "./components/common/NavigationBar";
import { NavMenuItems } from './components/common/NavMenuItems';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <NavigationBar />
      <Routes>
        {NavMenuItems.map((item) => (
          <Route exact path={item.path} element={<item.element />}> </Route>
        ))}
      </Routes>
    </Router>
    </>
  );
}

export default App;
