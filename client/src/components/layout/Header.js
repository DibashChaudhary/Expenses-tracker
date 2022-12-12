import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({})


  useEffect(()=>{
      const user = JSON.parse(sessionStorage.getItem("user"));
      setUser(user);
    console.log(user)
  },[])

  const handleOnLogout = ()=>{
    alert("logging out");
    //remove the user from local storage
    sessionStorage.removeItem("user");

    //redirect user to the login 
    // navigate("/dashboard")
  }

  return (
    <Navbar bg="primary" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <div className="nav-link fw-bolder text-warning">
                  welcome Back {user?.name}
                  </div>
                  <Link 
                    to="/" 
                    className="nav-link"
                    onClick={handleOnLogout}>
                      Log Out
                    </Link>
              </>
            ):(
              <>
                <Link to="/" className="nav-link">Login</Link>
                <Link to="/register" className="nav-link">Register</Link>
              </>
            )}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
