import React, { Component } from 'react'

class QuizQuestionButton extends Component {
    render() {
        return (
            <li><button>{this.props.button_tex}t</button></li>
        )
    }
}

export default QuizQuestionButton