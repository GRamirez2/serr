import React from 'react';

import TextInput from '../forms/TextInput'
import TextArea from '../forms/TextArea'
import Select from '../forms/Select'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      textInputValue: '',
      textAreaValue: '',
      selectedValue: '',
    }
    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleTextArea = this.handleTextArea.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
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
        <h1>Form element components:</h1>

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
