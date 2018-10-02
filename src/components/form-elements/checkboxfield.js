import React from 'react';

export default class CheckBoxField extends React.Component{
  render() {
    const {label, name, onChange} = this.props;
    return (
      <div className="checkbox-field">
      <input
      type="checkbox"
      name={name}
      id={name}
      onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
      </div>
    )
  }
}
