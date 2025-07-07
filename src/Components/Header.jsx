import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#eee" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>🏁 Goal Form</Link>
      <Link to="/contribution" style={{ marginRight: "1rem" }}>💰 Contribution</Link>
      <Link to="/goals" style={{ marginRight: "1rem" }}>📋 View Goals</Link>
      <Link to="/progress" style={{ marginRight: "1rem" }}>📊 Goal Progress</Link>
    </nav>
  );
}

export default Header;