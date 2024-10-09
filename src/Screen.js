import { useSelector } from "react-redux";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Screen(props){
    const displaySelector = (state) => state.display
    const display = useSelector(displaySelector)

    return (<div>
        <Form>
            <Row className="justify-content-center">
                <Col className="bg-dark rounded-bottom rounded-4 border-top border-bottom border-dark border-5" xs={8} md={4} lg={4}>
                    <Form.Control className="bg-light text-end" value={display} disabled readOnly></Form.Control>
                </Col>
            </Row>
        </Form>
    </div>)
}

export default Screen;