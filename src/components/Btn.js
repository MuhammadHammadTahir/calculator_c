import React from 'react'

function Btn(props) {


  const sqWsign = () => {
    if (props.pre.length === 1) {
      props.update('Syntax Error');
    }
    else {
      let i = 0;
      for (; i < props.pre.length - 1; i++) {
        if (props.pre[i] === '√') {
          break;
        }
      }
      if (i === 0) {
        const sqnum = props.pre.slice(i + 1);
        console.log(sqnum);
        const sq = Math.pow(parseFloat(sqnum), 1 / 2);
        props.update(sq + props.text);
        console.log(sq);
        props.setsqRoot(false);     
      }                             
      else {
        const sqpre = props.pre.slice(0, i - 1);
        const sqnum = props.pre.slice(i + 1);
        const sq = Math.pow(parseFloat(sqnum), 1 / 2);
        const solvesqwsign = parseFloat(sqpre) + sq;
        try {
          const evalResult = eval(solvesqwsign);
          props.update(evalResult.toString() + props.text);
        } catch (error) {
          console.error("Invalid expression:", error);
        }
        props.setsqRoot(false);
      }
    }
  }
  const simple = () => {

    if (props.pre.length === 1) {
      props.update('Syntax Error');
    }
    else {
      let i = 0;
      for (; i < props.pre.length - 1; i++) {
        if (props.pre[i] === '√') {
          break;
        }
      }
      if (i === 0) {
        const sqnum = props.pre.slice(i + 1);
        const sq = Math.pow(parseFloat(sqnum), 1 / 2);
        props.update(sq);
        props.setsqRoot(false);
      }
      else {
        const sqpre = props.pre.slice(0, i - 1);
        const sqnum = props.pre.slice(i + 1);
        const sq = Math.pow(parseFloat(sqnum), 1 / 2);
        const solvesqwsign = parseFloat(sqpre) + sq;
        try {
          const evalResult = eval(solvesqwsign);
          props.update(evalResult.toString());
        } catch (error) {
          console.error("Invalid expression:", error);
        }
        props.setsqRoot(false);
      }
    }
  }
  const handleClick = () => {

    if (props.text === 'CE') {
      props.update('');
    }
    else {
      if (props.text === 'C') {
        if (props.pre.length > 0) {
          let newtext = props.pre.slice(0, -1);
          props.update(newtext);
        }
        else {
          props.update('');
        }
      }
      else if (props.text === '=') {
        if (props.sqroot === true) {
          simple();
        }
        else {
          try {
            const check = props.text.slice(-2, -1);
            console.log(check);
            const evalResult = eval(props.pre);
            props.update(evalResult.toString());
          } catch (error) {
            console.error("Invalid expression:", error);
          }
        }
      }
      else {
        if (props.text === 'x^2') {
          let operatorIndex = -1
          for (let i = props.pre.length - 1; i >= 0; i--) {
            if (props.pre[i] === '+' || props.pre[i] === '-' || props.pre[i] === '*' || props.pre[i] === '/') {
              operatorIndex = i;
              break;
            }
          }
          if (operatorIndex === -1) {
            const squareResult = Math.pow(props.pre, 2);
            props.update(squareResult.toString());
          }
          else {
            const substring = props.pre.slice(operatorIndex + 1);
            const squareResult = Math.pow(substring, 2);
            if (squareResult === 0) {
              props.update("Syntax Error");
            }
            else {
              const substringBeforeOperator = props.pre.slice(0, operatorIndex + 1);
              props.update(substringBeforeOperator + squareResult.toString());
            }
          }
        }
        else {
          if (props.text === '√') {
            props.setsqRoot(true);
            props.update(props.pre + '√');
          }
          else {
            if (props.text === '.') {
              props.update(props.pre + '.');
            }
            else {
              if (props.text === '/' || props.text === '*' || props.text === '-' || props.text === '+') {
                if (props.sqroot === true) {
                  sqWsign();
                }
                else {
                  props.update(props.pre + props.text);
                }
              }
              else {
                props.update(props.pre + props.text);
              }
            }
          }
        }
      }
    }
  }

  const handleDisable = () => {
    if (props.text === '/' || props.text === '*' || props.text === '-' || props.text === '+' || props.text === '=') {
      if (props.pre.length === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };


  return (
    <>
      <button disabled={handleDisable()} className={`btn btn-${props.color} mx-2 my-1 `} type="submit" onClick={handleClick}>{props.text}</button>
    </>
  )
}

export default Btn;
