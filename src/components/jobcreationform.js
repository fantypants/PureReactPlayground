import React from 'react';
import TextInputField from './form-elements/textinputfield';
import CheckBoxField from './form-elements/checkboxfield';
import SelectField from './form-elements/selectfield';

const locationOptions = [
  {value: "", label: "Select"},
  {value: "Berlin", label: "Berlin"},
  {value: "San Francisco", label: "San Francisco"},
  {value: "London", label: "London"},
  {value: "Austin", label: "Austin"},
  {value: "Tokyo", label: "Tokyo"},
  {value: "Barcelona", label: "Barcelona"},
  {value: "Other", label: "Other"}
];

export default class JobCreationForm extends React.Component{
handleChange(e){
  const {type, name, value, checked} = e.target;
  switch(type) {
    case "checkbox":
    console.log(name, ' ==> ', checked)
    break;
    default:
    console.log(name, ' ==> ', value);
  }
}
  render() {

    return(
      <form>
      <TextInputField
      name="title"
      label="Title"
      onChange={this.handleChange}
      />
      <TextInputField
      name="company"
      label="Company"
      onChange={this.handleChange}
      />
      <TextInputField
      name="salary"
      label="Salary"
      onChange={this.handleChange}
      />
      <CheckBoxField
      name="isRemoteFriendly"
      label="Remote Friendly?"
      onChange={this.handleChange}
      />
      <SelectField
      name="location"
      label="Location"
      options = {locationOptions}
      onChange={this.handleChange}
      />
      </form>
    )
  }
}
