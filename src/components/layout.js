import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Layout( {children} ) {
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Compendium Companion</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/collection">Collection</Nav.Link>
        <Nav.Link href="/add">Add</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
 <main>
    {children}
 </main>
 </>
  );
}

export default Layout;