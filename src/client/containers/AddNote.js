import React from 'react'
import { connect } from 'react-redux'
import {addNote} from "../actions/notes";
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

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
			  <input placeholder="enter new activity @category"
				  ref={node => {
					  input = node
				  }}
			  />
			  <button type="submit">
				  add note
			  </button>
		  </form>
	  </div>
  )
}
AddNote = connect()(AddNote)

export default AddNote