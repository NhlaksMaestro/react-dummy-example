import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class MobileNumberInput extends React.Component {

    render() {
        const customText={
          color: '#000'
        }
        return (
          <TextField
            style={customText}
            fullWidth={true}
            floatingLabelText="Mobile Number"
            errorText={this.props.MobileNumberText}
            onChange={e => this.props.checkMobileValue(e,
                            {
                              type: 'MobileNumber',
                              regex: /^((?:\+27|27)|0)(\d{2})-?(\d{3})-?(\d{4})$/,
                              isRequired: true})}
            onBlur={this.props.isDisabled}/>
        );
    }
}

class MuiForm extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          guest: {
              id: "",
              first_name:"",
              last_name: "",
              company: ""
          },
          MobileNumbers: [],
          MobileNumberText: "",
          EmailErrorText: ""
        }
        this.addMoreMobileNumbers = this.addMoreMobileNumbers.bind(this);
    }
    checkEmailValue(e, type) {
      const value = e.target.value;
      const regexVal = type.regex.test(value) || false;
      if (!regexVal) {
        console.log('if (regexVal) {');
        this.setState({EmailErrorText: "Please enter a valid email eg: you@handle.domain"});
      } else {
          this.setState({EmailErrorText: ""});
      }
      if(type.isRequired && jQuery.isEmptyObject(value)) {
        console.log('checkEmailValue(e, type) {if(type.isRequired && jQuery.isEmptyObject(value)) {');
        this.setState({EmailErrorText: "Please enter your email address to carry on..."});
      }
        const nextState = {};
        nextState[type] = value;
        this.setState(nextState);
        console.log(value);
    }
    checkMobileValue(e, type) {
      const value = e.target.value;
      const regexVal = type.regex.test(value) || false;

      if (!regexVal) {
          this.setState({MobileNumberText: "Please enter a valid South African mobile number eg +27266676762"});
      } else {
          this.setState({MobileNumberText: ""});
      }
      if(type.isRequired && jQuery.isEmptyObject(value)) {
        this.setState({MobileNumberText: "Please enter your mobile number to carry on..."});
      }
        const nextState = {};
        nextState[type] = value;
        this.setState(nextState);
        console.log(value);
    }
    addMoreMobileNumbers(){
      const MobileNumbers = this.state.MobileNumbers;
      if (MobileNumbers.length < 2) {
        this.setState({
            MobileNumbers: MobileNumbers.concat(<MobileNumberInput key={MobileNumbers.length} />)
        });
      }
    }
  componentWillReceiveProps(nextProps){
    const { guest } = this.props;
    this.setState({guest: nextProps.guest});
  }
  render(){
    const customAvatar = {
      backgroundColor: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      borderRadius: '50%',
      height: '50px',
      width: '50px',
      top: '15px',
      left: '20px'
    };
    const addCircleStyle ={
      backgroundColor: 'transparent !important',
      color: '#ffffff !important',
      float: 'right !important',
      zIndex:'1 !important'
    }
    const customDivider = {
        fontSize: '5px',
        borderColor: '#D6D6D6 !important',
        lineHeight: '0px'
      };
    const customText={
        color: '#000'
      }
    const { guest } = this.state;
    return (
      <Form >
        <ListItem disabled={true} leftAvatar={<Avatar style={customAvatar}></Avatar>} >
            <h3>{guest.first_name} {guest.last_name}</h3>
            <h4>{guest.company}</h4>
        </ListItem>
        <Divider style={customDivider}/>
        <div className="formBody">
          <br/>
          <h5>Contact Details:</h5>
          <TextField
            style={customText}
            type="email"
            fullWidth={true}
            floatingLabelText="Email Address"
            errorText={(this.state.EmailErrorText.length > 0)? this.state.EmailErrorText: ''}
            onChange={e => this.checkEmailValue(e,
                            {
                              type: 'EmailAddress',
                              regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              isRequired: true})}
            onBlur={this.isDisabled}/>
          <TextField
            style={customText}
            fullWidth={true}
            floatingLabelText="Mobile Number"
            errorText={(this.state.MobileNumberText.length > 0)? this.state.MobileNumberText: ''}
            onChange={e => this.checkMobileValue(e,
                            {
                              type: 'MobileNumber',
                              regex: /^((?:\+27|27)|0)(\d{2})-?(\d{3})-?(\d{4})$/,
                              isRequired: true})}
            onBlur={this.isDisabled}/>

            {this.state.MobileNumbers.map((MobileNumber, index) => {
                    return MobileNumber
                })}
            <label className="add-number">
              <FloatingActionButton
                backgroundColor="transparent"
                disabledColor="white"
                mini={true}
                onClick={this.addMoreMobileNumbers.bind(this)}>
                <ContentAdd></ContentAdd>
              </FloatingActionButton>
              Add Number
            </label>
        </div>
      </Form>
    );
  }
}

export default MuiForm;
