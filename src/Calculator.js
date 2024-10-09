import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

function Calculator(props){
    return(
    <div>
        <Row className="justify-content-center g-2">
            <Col className="bg-dark border-start border-dark border-3" xs={2}  md={1} lg={1}>
                <Button className="w-100 text-white" variant="secondary">AC</Button>
            </Col>
            <Col className="bg-dark" xs={2}  md={1} lg={1}>
                <Button className="w-100 text-white" variant="info">%</Button>
            </Col>
            <Col className="bg-dark" xs={2}  md={1} lg={1}>
                <Button className="w-100 text-white" variant="info">+/-</Button>
            </Col>
            <Col className="bg-dark border-right border-dark border-3" xs={2}  md={1} lg={1}>
                <Button className="w-100 text-white" variant="info">x</Button>
            </Col>
        </Row>
        <Row className="justify-content-center g-2">
            <Col className="bg-dark border-start border-dark border-3" xs={2}  md={1} lg={1}>
                <Button className="w-100">7</Button>
            </Col>
            <Col className="bg-dark" xs={2}  md={1} lg={1}>
                <Button className="w-100">8</Button>
            </Col>
            <Col className="bg-dark" xs={2}  md={1} lg={1}>
                <Button className="w-100">9</Button>
            </Col>
            <Col className="bg-dark border-right border-dark border-3" xs={2}  md={1} lg={1}>
                <Button className="w-100 text-white" variant="info">-</Button>
            </Col>
        </Row>
        <Row className="justify-content-center g-2">
            <Col className="bg-dark border-start border-dark border-3" xs={2}  md={1} lg={1}>
                <Button className="w-100">4</Button>
            </Col>
            <Col className="bg-dark" xs={2}  md={1} lg={1}>
                <Button className="w-100">5</Button>
            </Col>
            <Col className="bg-dark" xs={2}  md={1} lg={1}>
                <Button className="w-100">6</Button>
            </Col>
            <Col className="bg-dark border-right border-dark border-3" xs={2}  md={1} lg={1}>
                <Button className="w-100 text-white" variant="info">+</Button>
            </Col>
        </Row>
        <Row className="justify-content-center g-2">
            <Col className="bg-dark border-start border-dark border-3" xs={2}  md={1} lg={1}>
                <Button className="w-100">1</Button>
            </Col>
            <Col className="bg-dark" xs={2}  md={1} lg={1}>
                <Button className="w-100">2</Button>
            </Col>
            <Col className="bg-dark" xs={2}  md={1} lg={1}>
                <Button className="w-100">3</Button>
            </Col>
            <Col className="bg-dark border-end border-dark border-3" xs={2}  md={1} lg={1}>
                <Button className="w-100 text-white" variant="info">/</Button>
            </Col>
        </Row>
        <Row className="justify-content-center g-2">
            <Col className="bg-dark border-start border-bottom border-dark border-3" xs={2}  md={1} lg={1}>
                <Button className="w-100">.</Button>
            </Col>
                <Col className="bg-dark border-bottom border-dark border-3" xs={4}  md={2} lg={2}>
            <Button className="w-100">0</Button>
            </Col>
                <Col className="bg-dark border-bottom border-end border-dark border-3" xs={2} md={1} lg={1}>
            <Button className="w-100 text-white" variant="success">=</Button>
            </Col>
        </Row>
    </div>)
}

export default Calculator