import React,{useState} from 'react'
import Btn from './Btn'
function Buttons(props) {

    const [uptext, setUptext] = useState(props.write);
    const [result, setResult] = useState(""); 
    props.setText(uptext);


  return (
    <div className='btnbox'>
        <div className='btton'>
            <Btn color='danger'     text='CE'      pre={uptext}     update={setUptext} setResult={setResult}/>
            <Btn color='primary'    text='C'       pre={uptext}     update={setUptext} setResult={setResult}/>
            <Btn color='info'       text='√'       pre={uptext}     update={setUptext} />
            <Btn color='info'       text='÷'       pre={uptext}     update={setUptext} />
        </div> 
        <div className='btton'>
            <Btn color='secondary'  text='7'       pre={uptext}     update={setUptext} />
            <Btn color='secondary'  text='8'       pre={uptext}     update={setUptext} />
            <Btn color='secondary'  text='9'       pre={uptext}     update={setUptext} />
            <Btn color='info'       text='x'       pre={uptext}     update={setUptext} />
        </div>
        <div className='btton'>
            <Btn color='secondary'  text='5'       pre={uptext}    update={setUptext}  />
            <Btn color='secondary'  text='4'       pre={uptext}    update={setUptext}  />
            <Btn color='secondary'  text='6'       pre={uptext}    update={setUptext}  />
            <Btn color='info'       text='-'       pre={uptext}    update={setUptext}  />
        </div>
        <div className='btton'>
            <Btn color='secondary' text='1'        pre={uptext}    update={setUptext}  />
            <Btn color='secondary' text='2'        pre={uptext}    update={setUptext}  />
            <Btn color='secondary' text='3'        pre={uptext}    update={setUptext}  />
            <Btn color='info'      text='+'        pre={uptext}    update={setUptext}  />
        </div>
        <div className='btton'>
            <Btn color='info'      text='x^2'      pre={uptext}    update={setUptext}  />
            <Btn color='secondary' text='0'        pre={uptext}    update={setUptext} />
            <Btn color='info'      text='.'        pre={uptext}    update={setUptext}  />
            <Btn color='success'   text='='        pre={uptext}    update={setUptext}  setResult={setResult}/>
        </div>
        <div className='result'>
            {result !== "" && <div className='result-text'>{result}</div>}
        </div>
    </div>
  )
}

export default Buttons
