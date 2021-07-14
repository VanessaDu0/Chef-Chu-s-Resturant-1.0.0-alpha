import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Contact from "./pages/contact-page/contact.component";
import MenuPage from "./pages/menu-page/menu-page.component";
import MenuDetail from "./pages/menu-detail-page/menu-detail-page.component";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NevBar from "./components/nevbar/nevbar.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NevBar />
        <Router basename={`${process.env.PUBLIC_URL}/`}>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/menu/:menuId" component={MenuDetail} />
        </Router>
      </div>
    );
  }
}

export default App;
