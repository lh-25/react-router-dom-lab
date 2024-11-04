import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <nav>
      <ul>
        <li>
          <Link className="link" to='/'>Home</Link>
        </li>
        <li>
          <Link className="link" to='/mailboxes'>Mailboxes</Link>
        </li>
        <li>
          <Link  className="link" to='/new-mailbox'>New Mailbox</Link>
        </li>

      </ul>
    </nav>
  )
}