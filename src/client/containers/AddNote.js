import React from 'react'
import { connect } from 'react-redux'
import {addNote} from "../actions/notes";


let AddNote = ({ dispatch }) => {
	let input;

  return (
	  <div>
		  <form
			  onSubmit={e => {
				  e.preventDefault()
				  if (!input.value.trim()) {
					  return
				  }
				  dispatch(addNote(input.value))
				  input.value = ''
			  }}
		  >
			  <input
				  ref={node => {
					  input = node
				  }}
			  />
			  <button type="submit">
				  Add Note
			  </button>
		  </form>
	  </div>
  )
}
AddNote = connect()(AddNote)


export default AddNote