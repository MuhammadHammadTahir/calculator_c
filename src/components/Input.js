import React from 'react'

function Input(props) {

  const handleChange=(event)=>{
    if(event.target.value>=0&&event.target.value<=9)
    {
      props.keyboard(event.target.value);
    }
    else{
      props.keyboard('!!!!syntax error!!!!');
    }
  }

  return (
  <div className="mb-3 fix">
    <textarea className="form-control area inpo " id="my-calculator" value={props.text} onChange={handleChange}  rows="2"></textarea>
  </div>
  )
}

export default Input