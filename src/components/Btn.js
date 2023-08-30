import React from 'react'


function Btn(props) {

  const handleClick = () => {
    if(props.text==='CE')
    {
      props.update('');
    }
    else
    {
      if(props.text==='C')
      {
        if (props.pre.length > 0)
        {
          let newtext = props.pre.slice(0, -1);
          props.update(newtext);
        }
        else
        {
          props.update('');
        }
      }
      else
      {
        if(props.text==='x^2')
        {
          props.update(props.pre + '^2');
          props.opersq=true;
        }
        else
        {
          if(props.text==='√')
          {
            props.opersqroot=true;
          }
          else
          {
            if(props.text==='.')
            {
              props.operpoint=true;
            }
            else
            {
              if(props.text==='÷'||props.text==='x'||props.text==='-'||props.text==='+')
              {
                props.setOper(true);
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
    if (props.text === '÷' || props.text === 'x' || props.text === '-' || props.text === '+') {
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
