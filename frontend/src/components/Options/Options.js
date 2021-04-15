import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Options.css';
import {Link} from 'react-router-dom';

function Options() {

  return (
    <div>
      <h4 className="text-center">Sign In/Sign Up Page</h4>
      <Row className="text-center">
        <Col md={{ span: "1", offset: "5" }}>
          <Link to="/signin">
            <button className="btn btn-primary m-3">Login</button>
          </Link>
        </Col>
        <Col md={{ span: "1", offset: "0" }}>
          <Link to="/signup">
            <button className="btn btn-warning m-3">Signup</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Options;
