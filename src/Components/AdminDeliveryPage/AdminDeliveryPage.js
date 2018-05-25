import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Admin Delivery Page, to see the current question, answer choices, correct answer(initially hidden) */

class ShowQuestionCard extends Component {
    constructor (props) {
        super(props);
        //TODO: Set props displaying questions and choices(correct answer initially hidden)
    }
}

export default connect(mapStateToProps)(ShowQuestionCard);
