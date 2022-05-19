import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./styles/main.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>}/>
      </Routes>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
