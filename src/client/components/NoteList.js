import React from 'react';
import styled from 'styled-components';
import NoteItem from "./NoteItem";

const Wrapper = styled.main`
  background: pink
`

const NoteListElement = (props) => {
	return (
		<ul>
			{props.noteList.map(item => {
				return <li>{item.value}</li>
			})}
		</ul>
	)
}

class NoteList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: '', noteList: [{value: 'Test1'}]};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState ({value: event.target.value});
	}

	handleSubmit(event) {
		const newState = {noteList: this.state.noteList, value: ''};
		newState.noteList.push({value: this.state.value});
		this.setState (newState);
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.value} onChange={this.handleChange}/>
					<input type="submit" value="Submit"/>
				</form>
				<NoteListElement noteList={this.state.noteList}/>
			</div>
		)
	}
}

export default NoteList;