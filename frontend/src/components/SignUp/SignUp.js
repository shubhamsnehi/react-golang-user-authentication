import { Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';
import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { PostData } from '../../service/PostService';

function SignUp() {

  const [userData, setUserData] = useState({ name: "" })
  const [redirect, setRedirect] = useState(false)

  function signup(e) {
    e.preventDefault()
    let name = document.getElementById("name").value
    if (name !== '') {
      let a = PostData(userData)
      console.log("Signed Up")
      setRedirect(true)
      // window.location.reload();
    }
    else {
      console.log("Enter Name")
    }
  }

  if (redirect === true) {
    return (<Redirect to='/signin' />)
  }
  else {
    return (
      <div>
        <Row>
          <Col md={4}></Col>
          <Col md={4} className="m-5 p-2 border">
            <Form>
              <Form.Group className="text-center h4">
                <Form.Label>Sign Up</Form.Label>
              </Form.Group>
              <hr />
              <Form.Group>
                <Form.Label>Name</Form.Label>
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control id="name" type="text" onChange={(e) => setUserData({ name: e.target.value })} placeholder="Name" />
              </Form.Group>
              <Button variant="primary" onClick={(e) => signup(e)} type="submit">
                Sign Up
          </Button>
              <Link to="/">
                <Button className="ml-5" variant="warning" type="submit">
                  Back
            </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default SignUp;
