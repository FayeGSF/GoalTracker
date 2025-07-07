import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#eee", textAlign:"center"}}>
      <Link to="/" style={{ marginRight: "1rem" , textDecoration: "none", fontFamily: "Monospace", fontSize: "16px"}}>🏁 Goal Form</Link>
      <Link to="/contribution" style={{ marginRight: "1rem" , textDecoration: "none" , fontFamily: "Monospace", fontSize: "16px"}}>💰 Contribution</Link>
      <Link to="/goals" style={{ marginRight: "1rem" , textDecoration: "none" , fontFamily: "Monospace", fontSize: "16px"}}>📋 View Goals</Link>
      <Link to="/progress" style={{ marginRight: "1rem"  , textDecoration: "none" , fontFamily: "Monospace", fontSize: "16px"}}>📊 Goal Progress</Link>
    </nav>
  );
}

export default Header;