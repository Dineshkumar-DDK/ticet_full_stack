import React from 'react'

const TicketCreateForm = () => {
  return (
    <form className='flex flex-col space-y-2'>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='title' />
        <label htmlFor='content'>Content</label>
        <textarea id='content' name='content'/>
        <button type='submit'>Create Ticket</button>    
    </form>
  )
}

export default TicketCreateForm