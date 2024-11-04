import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import NavBar from "./components/NavBar";
import './App.css'

const mailboxExample =[ 
  { _id: 1, boxSize: 'Small', boxholder: 'Alex'}, 

]

export default function App() {


  const [mailboxes, setMailboxes] = useState(mailboxExample)
  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailboxData])

  }
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList mailbox={mailboxes}/>} />
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailbox={mailboxes}/>} />
        <Route path='*' element={<h2>Whoops, nothing here!</h2>} />
      </Routes>

    </>
  )
};



