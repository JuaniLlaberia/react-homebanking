import React from 'react'

export default function ErrorMsg({ msg }) {
  return (
    <div style={{backgroundColor:'#ff5d52', color:'white', padding:'5px', border:'1px solid #cc180c', fontSize:'0.75rem'}}>
      <p>{msg}</p>
    </div>
  )
}
