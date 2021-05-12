import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import Container from "./components/Container";

console.log(process.env.REACT_APP_GOOGLE_API_KEY)



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path={["/", "/portfolio-react"]} component={Main} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
