import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  background: pink
`

class NoteList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (


			<input type="submit" value="Submit" />

            <div>
                // textarea input
                // submit input
                </div>

            // the list items
		)
	}
}

export default NoteList;