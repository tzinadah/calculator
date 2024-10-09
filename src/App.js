import Screen from "./Screen";
import Calculator from "./Calculator";
import store from "./store";

import { Provider } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import "./custom.scss"

function App() {
  return (
    <div className="vh-100 d-flex align-items-center">  
      <Provider store={store}>  
        <Container>
            <Row className="justify-content-center">
              <Col xs={12} lg={8}>
                <Screen />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} lg={8}>
                <Calculator />
              </Col>
            </Row>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
