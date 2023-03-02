import { Link } from "react-router-dom"
import "./Nav.styled"

const Nav = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/people">People</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Nav
