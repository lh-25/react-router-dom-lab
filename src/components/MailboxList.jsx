import { Link } from "react-router-dom";

export default function MailboxList (props) {
  return (
    <>
      <h2>Mailbox List</h2>
      <ul>
        {props.mailbox.map((currentMailbox) => (
          <li key={currentMailbox.boxholder}>
            <Link className="link" to={`/mailboxes/${currentMailbox._id}`}> {currentMailbox._id}</Link>
            </li>
        ))}
      </ul>
    </>
  );
};