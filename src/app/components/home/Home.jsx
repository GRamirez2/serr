import React from 'react';

import TextInput from '../forms/TextInput'
import TextArea from '../forms/TextArea'
import Select from '../forms/Select'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      textInputValue: '',
      textAreaValue: '',
      selectedValue: '',
    }
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleTextArea = this.handleTextArea.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  onIncrement () {
    this.setState({
      count: this.state.count + 1
    })
  }

  onDecrement ()  {
    this.setState({
      count: this.state.count - 1
    })
  }

  handleTextInput (e) {
    this.setState({
      textInputValue: e.target.value
    })
  }

  handleTextArea (e) {
    this.setState({
      textAreaValue: e.target.value
    })
  }

  handleSelect (e) {
    this.setState({
      selectedValue: e.target.value
    })
  }

  render () {
    return (
      <div className="container home">
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
        <br />
        <form>
          <TextInput 
            label={'To Do'}
            inputType={'text'}
            name={'todo'}
            content={this.state.textInputValue}
            controlFunction={this.handleTextInput}
            placeholder={'enter a todo item'} />
          
          <TextArea
            label={'A text area'}
            name={'textareaName'}
            controlFunction={this.handleTextArea}
            content={this.state.textAreaValue} />
          

          <Select 
            name={'select'}
            controlFunction={this.handleSelect}
            selectedValue={this.state.selectedValue}
            options={['one','two','three']} />

        </form>
      </div>
    )  
  }
  
}

export default Home;
