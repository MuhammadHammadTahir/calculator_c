import React,{useState} from 'react'
import Btn from './Btn'
function Buttons(props) {

    const [uptext, setUptext] = useState(props.write);
    const [sqroot, setsqRoot] = useState(false); 
    const [sign, setSign] = useState(false); 
    props.setText(uptext);


  return (
    <div className='btnbox'>
        <div className='btton'>
            <Btn color='danger'     text='CE'      pre={uptext}     update={setUptext} sqroot={sqroot} setsqRoot={setsqRoot} />
            <Btn color='primary'    text='C'       pre={uptext}     update={setUptext} sqroot={sqroot} setsqRoot={setsqRoot}/>
            <Btn color='info'       text='√'       pre={uptext}     update={setUptext} sqroot={sqroot} setsqRoot={setsqRoot} sign={sign} setSign={setSign}/>
            <Btn color='info'       text='/'       pre={uptext}     update={setUptext} sqroot={sqroot} setsqRoot={setsqRoot} sign={sign} setSign={setSign}/>
        </div> 
        <div className='btton'>
            <Btn color='secondary'  text='7'       pre={uptext}     update={setUptext} sqroot={sqroot} setsqRoot={setsqRoot}/>
            <Btn color='secondary'  text='8'       pre={uptext}     update={setUptext} sqroot={sqroot} setsqRoot={setsqRoot}/>
            <Btn color='secondary'  text='9'       pre={uptext}     update={setUptext} sqroot={sqroot} setsqRoot={setsqRoot}/>
            <Btn color='info'       text='*'       pre={uptext}     update={setUptext} sqroot={sqroot} setsqRoot={setsqRoot} sign={sign} setSign={setSign}/>
        </div>
        <div className='btton'>
            <Btn color='secondary'  text='5'       pre={uptext}    update={setUptext}  sqroot={sqroot} setsqRoot={setsqRoot}/>
            <Btn color='secondary'  text='4'       pre={uptext}    update={setUptext}  sqroot={sqroot} setsqRoot={setsqRoot}/>
            <Btn color='secondary'  text='6'       pre={uptext}    update={setUptext}  sqroot={sqroot} setsqRoot={setsqRoot}/>
            <Btn color='info'       text='-'       pre={uptext}    update={setUptext}  sqroot={sqroot} setsqRoot={setsqRoot} sign={sign} setSign={setSign}/>
        </div>
        <div className='btton'>
            <Btn color='secondary' text='1'        pre={uptext}    update={setUptext}  sqroot={sqroot} setsqRoot={setsqRoot}/>
            <Btn color='secondary' text='2'        pre={uptext}    update={setUptext}  sqroot={sqroot} setsqRoot={setsqRoot}/>
            <Btn color='secondary' text='3'        pre={uptext}    update={setUptext}  sqroot={sqroot} setsqRoot={setsqRoot}/>
            <Btn color='info'      text='+'        pre={uptext}    update={setUptext}  sqroot={sqroot} setsqRoot={setsqRoot} sign={sign} setSign={setSign}/>
        </div>
        <div className='btton'>
            <Btn color='info'      text='x^2'      pre={uptext}    update={setUptext} sqroot={sqroot} setsqRoot={setsqRoot} />
            <Btn color='secondary' text='0'        pre={uptext}    update={setUptext} sqroot={sqroot} setsqRoot={setsqRoot} />
            <Btn color='info'      text='.'        pre={uptext}    update={setUptext} sqroot={sqroot} setsqRoot={setsqRoot} />
            <Btn color='success'   text='='        pre={uptext}    update={setUptext} sqroot={sqroot} setsqRoot={setsqRoot} />
        </div>
    </div>
  )
}

export default Buttons
