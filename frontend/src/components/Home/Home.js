import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { useState } from 'react';
import { Redirect } from 'react-router';

function Home(props) {

  const [redirect, setRedirect] = useState(false)

  function logout(e) {
    e.preventDefault()
    sessionStorage.removeItem("userCredentials")
    setRedirect(true)
    // window.location.reload();
  }

  if (redirect === true) {
    return (<Redirect to='/' />)
  }
  else {
    return (
      <div>
        <Row className="text-center mt-3">
          <Col md={4}>
            Welcome :<br/> ID:{props.location.state.id} &nbsp; Name:{props.location.state.name}
        </Col>
          <Col>
            <button className="btn btn-danger" onClick={(e) => logout(e)}>Logout</button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
