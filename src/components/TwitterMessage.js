import React from "react";

class TwitterMessage extends React.Component {
  

  state = {
    message: "",
    charactersRemaining: this.props.maxChars
  }
  
  handleInput = (event) => {
   
    this.setState({
      message: event.target.value
    })
  }

  renderRemaining =() => {
    if ((this.state.charactersRemaining - this.state.message.length) > -1 ) {
      return this.state.charactersRemaining - this.state.message.length
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleInput} type="text" name="message" id="message" />
        <p>Characters Remaining: {this.renderRemaining()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
