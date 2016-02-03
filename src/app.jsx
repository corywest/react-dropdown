var React = require('react');
var Dropdown = require('./dropdown');

dropDownOptions = {
  title: 'Choose a dessert',
  items: [
    'Apple Pie',
    'Tiramisu',
    'Lemon Cake'
  ]
}

element = React.createElement(Dropdown, dropDownOptions)
ReactDOM.render(element, document.querySelector('.container'))
