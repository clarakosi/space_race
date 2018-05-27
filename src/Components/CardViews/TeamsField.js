import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Avatar from 'react-avatar';
import { connect } from 'react-redux';
/*******/
/* 
 * 
 * Note to self: react-avatar has react-addons-shallow-compare and propt-ty peer dependencies maksure the 
 * correct version is installed for the installed version of react.
 * 
 * This module is borrowed from the custom components example that uses Gravatar images.  I will attempt to do the same thing
 * but instead of using the Gravatar package, I will use Avatar.  the intent is to have a custom little avatar show up next 
 * to each  choice in the menu for each team.  
 * This  implements custom Option and Value components to render a Avatar image for each user based on their email.
 * It also demonstrates rendering HTML elements as the placeholder. Basically, slytherin will have a snake, ravenclaw will have the raven and so on.
 * 
 * 
 * THIS COMPONENT WILL REPLACE THE TEAM DROPDOWN MENU THAT IS CURRENTLY IN THE ShowRaceCard view. 
 */

const TEAMS = require('../data/teams');
const AVATAR_SIZE = 20;

const stringOrNode = PropTypes.oneOfType([
	PropTypes.string,
	PropTypes.node,
]);

const AvatarOption = createClass({
	propTypes: {
		children: PropTypes.node,
		className: PropTypes.string,
		isDisabled: PropTypes.bool,
		isFocused: PropTypes.bool,
		isSelected: PropTypes.bool,
		onFocus: PropTypes.func,
		onSelect: PropTypes.func,
		option: PropTypes.object.isRequired,
	},
	handleMouseDown (event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.onSelect(this.props.option, event);
	},
	handleMouseEnter (event) {
		this.props.onFocus(this.props.option, event);
	},
	handleMouseMove (event) {
		if (this.props.isFocused) return;
		this.props.onFocus(this.props.option, event);
	},
	render () {
		let avatarStyle = {
			borderRadius: 3,
			display: 'inline-block',
			marginRight: 10,
			position: 'relative',
			top: -2,
			verticalAlign: 'middle',
		};
		return (
			<div className={this.props.className}
				onMouseDown={this.handleMouseDown}
				onMouseEnter={this.handleMouseEnter}
				onMouseMove={this.handleMouseMove}
				title={this.props.option.title}>
				<Avatar email={this.props.option.email} size={AVATAR_SIZE} style={avatarStyle} />
				{this.props.children}
			</div>
		);
	}
});

const AvatarValue = createClass({
	propTypes: {
		children: PropTypes.node,
		placeholder: stringOrNode,
		value: PropTypes.object
	},
	render () {
		var avatarStyle = {
			borderRadius: 3,
			display: 'inline-block',
			marginRight: 10,
			position: 'relative',
			top: -2,
			verticalAlign: 'middle',
		};
		return (
			<div className="Select-value" title={this.props.value.title}>
				<span className="Select-value-label">
					<Avatar email={this.props.value.email} size={AVATAR_SIZE} style={avatarStyle} />
					{this.props.children}
				</span>
			</div>
		);
	}
});

const TeamsField = createClass({
	propTypes: {
		hint: PropTypes.string,
		label: PropTypes.string,
	},
	getInitialState () {
		return {
			removeSelected: true,
			disabled: false,
			stayOpen: true,
			value: []
		};
	},
	setValue (value) {
		
		this.setState({ 
			value
			 
		});
	},
	render () {
		var placeholder = <span>&#9786; Select Team</span>;

		return (
			<div className="section">
			
				<Select
					arrowRenderer={arrowRenderer}
					onChange={this.setValue}
					optionComponent={AvatarOption}
					options={TEAMS}
					placeholder={placeholder}
					value={this.state.value}
					valueComponent={AvatarValue}
					/>
			
			</div>
		);
	}
});

function arrowRenderer () {
	return (
		<span>+</span>
	);
}
function mapStateToProps(state) {
	return {
		teamsArray: state.teamsArray
	}
}
module.exports = TeamsField;
export default connect(mapStateToProps, {})(TeamsField);