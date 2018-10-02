import React from 'react';

export default class SelectField extends React.Component{
  render() {
    const {label, name, options, onChange} = this.props;
    return(
      <div className="input-field">
      <label
      className="input-field_label"
      htmlFor={name}
      >
      {label}
      </label>
      <select
      className="input-field_text-input"
      name={name}
      id={name}
      onChange={onChange}
      >
      {options.map(option =>
        <option
        value={option.value}
        key={option.label}
        >
        {option.label}
        </option>
      )};


      </select>
      </div>
    )
  }
}
