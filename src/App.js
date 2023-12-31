import './App.css';
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home"
            element={
            <ProtectedRoute>
              <Home/>
              </ProtectedRoute>} />
          </Routes>
        </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
