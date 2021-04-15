import { Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { GetData } from '../../service/GetService';

function SignIn(props) {

  const [redirect, setRedirect] = useState(false)
  const [userData, setUserData] = useState({ id: "", name: "" })

  async function login(e) {
    e.preventDefault()
    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    if (id !== '' || name !== '') {
      console.log("Logged In")
      let name = await GetData(userData);
      if (name !== "false") {
        setUserData(name)
        sessionStorage.setItem("userCredentials", userData)
        setRedirect(true)
      }
      // window.location.reload();
    }
    else {
      console.log("Error")
    }
  }

  if (sessionStorage.getItem("userCredentials")) {
    return (<Redirect to={{ pathname: "/home", state: userData }} />)
  }
  if (redirect === true) {
    return (<Redirect to={{ pathname: "/home", state: userData }} />)
  }
  else {
    return (
      <div>
        <Row>
          <Col md={4}></Col>
          <Col md={4} className="m-5 p-2 border">
            <Form>
              <Form.Group className="text-center h4">
                <Form.Label>Sign In</Form.Label>
              </Form.Group>
              <hr />
              <Form.Group>
                <Form.Label>ID</Form.Label>
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="text" id="id" onChange={(e) => setUserData({ id: e.target.value })} placeholder="Enter ID" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="text" id="name" onChange={(e) => setUserData({ name: e.target.value })} placeholder="Name" />
              </Form.Group>
              <Button variant="primary" onClick={(e) => login(e)} type="submit">
                Sign In
            </Button>
              <Link to="/">
                <Button className="ml-5" variant="warning" type="submit">
                  Back
            </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </div >
    );
  }
}
export default SignIn;
