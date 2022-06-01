import React from 'react'

const handleClick = (props, numbers, operatorButtons) => {
  props.setResetDisplay(false);
  if (!numbers.includes(props.buttonID)) {
    switch (props.buttonID) {
      case 'CLEAR':
        props.setValueToDisplay(0);
        props.setLastOperation(null);
        props.setLastValue(null);
        props.setResetDisplay(true);
        break;
      case 'TOGGLE_MINUS':
        props.setValueToDisplay(props.valueToDisplay * -1);
        break;
      case 'PERCENT':
        props.setValueToDisplay(props.valueToDisplay / 100);
        break;
      case 'DIVIDE':
        props.setLastOperation('/');
        break;
      case 'MULTIPLY':
        props.setLastOperation('*');
        break;
      case 'SUBTRACT':
        props.setLastOperation('-');
        break;
      case 'ADD':
        props.setLastOperation('+');
        break;
      case 'EQUALS':
        if (props.lastOperation === null) break;
        switch (props.lastOperation) {
          case '/':
            props.setValueToDisplay(props.lastValue / props.valueToDisplay);
            break;
          case '*':
            props.setValueToDisplay(props.lastValue * props.valueToDisplay);
            break;
          case '-':
            props.setValueToDisplay(props.lastValue - props.valueToDisplay);
            break;
          case '+':
            props.setValueToDisplay(props.lastValue + props.valueToDisplay);
            break;
          default:
            console.error('Incorrect operation.');
            break;
        }
        props.setLastOperation(null);
        break;
      case 'POINT':
        if (props.valueToDisplay.toString().includes('.')) break;
        props.setValueToDisplay(props.valueToDisplay + '.');
        break;
      default:
        console.error('Incorrect button pressed.');
    }

    if (operatorButtons.includes(props.buttonID)) {
      props.setLastValue(props.valueToDisplay);
    }

    if (props.buttonID !== 'POINT') {
      props.setResetDisplay(true);
    }
    return;
  }

  const pressedNumber = parseInt(props.buttonID);
  let number = undefined;
  if (props.resetDisplay) {
    number = parseFloat(pressedNumber);
  } else {
    number = parseFloat(props.valueToDisplay.toString() + pressedNumber);
  }
  props.setValueToDisplay(number);
}

export const Button = (props) => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operatorButtons = ['DIVIDE', 'MULTIPLY', 'SUBTRACT', 'ADD'];

  return (
    <button className={props.className} onClick={() => { handleClick(props, numbers, operatorButtons) }}>
      {props.value}
    </button>
  )
}