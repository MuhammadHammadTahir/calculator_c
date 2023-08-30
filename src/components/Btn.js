import React from 'react'


function Btn(props) {

  const handleClick = () => {
    if(props.text==='CE')
    {
      props.update('');
      props.setResult('');
    }
    else
    {
      if(props.text==='C')
      {
        if (props.pre.length > 0)
        {
          let newtext = props.pre.slice(0, -1);
          props.update(newtext);
          props.setResult(newtext);
        }
        else
        {
          props.update('');
          props.setResult('');
        }
      }
      else if (props.text === '=') {
        try {
          const evalResult = eval(props.pre); 
          props.update(evalResult.toString()); 
          props.setResult(evalResult.toString());
        } catch (error) {
          console.error("Invalid expression:", error);
          props.setResult('Invalid expression');
        }
      } 
      else
      {
        if(props.text==='x^2')
        {
          props.update(props.pre + '^2');
        }
        else
        {
          if(props.text==='√')
          {
            props.update(props.pre + '√');
          }
          else
          {
            if(props.text==='.')
            {
              props.update(props.pre + '.');
            }
            else
            {
              if(props.text==='÷'||props.text==='x'||props.text==='-'||props.text==='+')
              {
                // props.setOper(true);
              }
              else
              {
                props.update(props.pre + props.text);
              }
            }
          }
        }
      }
    }
  }

  const handleDisable = () => {
    if (props.text === '÷' || props.text === 'x' || props.text === '-' || props.text === '+'||props.text === '=') {
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
    <button disabled={handleDisable()}className={`btn btn-${props.color} mx-2 my-1 `} type="submit" onClick={handleClick}>{props.text}</button>
    </>
  )
}

export default Btn;
