import React, { Component } from 'react';
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

class SorteoStepper extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        email:  '',
        username: '',
        password: '', 
      }
    }
  
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    handleSubmit = event => {
      event.preventDefault()
      const { email, username, password } = this.state
      alert(`Your registration detail: \n 
             Email: ${email} \n 
             Username: ${username} \n
             Password: ${password}`)
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <Button 
        variant="contained" color="secondary"
          onClick={this._prev}>
        Previous
        </Button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
       
         <Button variant="contained" color="primary"  onClick={this._next}>
         Next
         {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        
       </Button >       
      )
    }
    return null;
  }
  
  buttonPreview(){
    let currentStep = this.state.currentStep;
    if(currentStep == 3){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Vista Previa
        </button>        
      )
    }
    return null;
  }
    
    render() {    
      return (
        <React.Fragment>
        <h1>React Wizard Form 🧙‍♂️</h1>
        <p>Step {this.state.currentStep} </p> 
  
        <form onSubmit={this.handleSubmit}>
        {/* 
          render the form steps and pass required props in
        */}
          <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            password={this.state.password}
          />
          {this.previousButton()}
          {this.nextButton()}
          {this.buttonPreview()}
  
        </form>
        </React.Fragment>
      );
    }
  }
  

 
  

  
export default SorteoStepper