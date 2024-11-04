import { useParams } from "react-router-dom"

export default function MailboxDetails (props) {
  const {mailboxId} = useParams()
  console.log(mailboxId)
  const singleMailbox = props.mailbox.find((box) => box._id === Number(mailboxId))
  console.log(singleMailbox)

  return !singleMailbox ? (<h1>Mailbox Not Found!</h1>) : (
    <>
      <h1>Mailbox {singleMailbox._id}</h1>
      <h2>Details</h2>
      <dl>
        <dt>Mailbox Holder: </dt>
        <dd>{singleMailbox.boxholder}</dd>
        <dt>Mailbox Size: </dt>
        <dd>{singleMailbox.boxSize}</dd>
      </dl>
    </>
  )
}