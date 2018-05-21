import React from 'react'
import { connect } from 'react-redux'
import {addNote} from "../actions/notes";
import styled from 'styled-components';

const Input = styled.input`
	background: white;
	color: #212529;
	padding: 0.25em 1em;
	margin-right: 0.5em;
	border: none;
	border-radius: 3px;
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  background: #212529;
  border: 2px solid #212529;

  color: #868e96;
	&:hover {
		color: #adb5bd;
	}
`;

const Form = styled.form`
	margin: 0;
`;

let AddNote = ({ dispatch }) => {
	let inputVal;

  return (
	  <div>
		  <Form
			  onSubmit={e => {
				  e.preventDefault()
				  if (!inputVal.value.trim()) {
					  return
				  }
				  dispatch(addNote(inputVal.value))
				  inputVal.value = ''
			  }}
		  >
			  <Input placeholder="enter new activity @category"
				  innerRef={node => {
					  inputVal = node
				  }}
			  />
			  <Button type="submit">
				  add note
			  </Button>
		  </Form>
	  </div>
  )
}
AddNote = connect()(AddNote)


export default AddNote