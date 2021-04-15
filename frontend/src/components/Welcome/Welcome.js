import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Welcome.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Options from '../Options/Options';
import Home from '../Home/Home';

function Welcome() {
  if (sessionStorage.getItem("userCredentials")) {
    return (
      <div>
        <Router>
          <Row>
            <Col className="m-1 mb-5 bg-primary text-center text-light h3">
              hi
            </Col>
          </Row>
          <Switch>
            <Route exact path="/*" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
  else {
    return (
      <div>
        <Router>
          <Row>
            <Col className="m-1 mb-5 bg-primary text-center text-light h3">
              he
            </Col>
          </Row>
          <Switch>
            <Route exact path="/" component={Options} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Welcome;
