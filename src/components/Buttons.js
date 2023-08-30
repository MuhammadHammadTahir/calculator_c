import React,{useState} from 'react'
import Btn from './Btn'
function Buttons(props) {

    const [uptext, setUptext] = useState(props.write);
    const [oper, setOper] = useState(false); //to check the performance of the opereation 
    props.setText(uptext);
    let opersq =false;   //to check the performance of the opereation square
    let opersqroot =false;   //to check the performance of the opereation squareroot
    let operpoint =false;   //to check the performance of the opereation squareroot
    let num1=0;
    let num2=0;

    if(oper===false)
    {
        num1=parseInt(uptext,10);
    }
    else
    {
        const delimiterChars = ['÷', 'x', '-', '+'];
        const firstDelimiterIndex = uptext.indexOf(delimiterChars[0]);
        for (let i = 1; i < delimiterChars.length; i++) {
        const currentIndex = uptext.indexOf(delimiterChars[i]);
        if (currentIndex !== -1 && (firstDelimiterIndex === -1 || currentIndex < firstDelimiterIndex)) {
        firstDelimiterIndex = currentIndex;
  }
}


        let resultString;
        if (firstDelimiterIndex !== -1) {
            resultString = uptext.substring(firstDelimiterIndex);
        }
        num2=parseInt(resultString,10);
    }
    console.log(num1);
    console.log(num2);


  return (
    <div className='btnbox'>
        <div className='btton'>
            <Btn color='danger'     text='CE'      pre={uptext}     update={setUptext} />
            <Btn color='primary'    text='C'       pre={uptext}     update={setUptext} />
            <Btn color='info'       text='√'       pre={uptext}     update={setUptext} opersqroot={opersqroot}/>
            <Btn color='info'       text='÷'       pre={uptext}     update={setUptext}  setOper={setOper}/>
        </div> 
        <div className='btton'>
            <Btn color='secondary'  text='7'       pre={uptext}     update={setUptext} />
            <Btn color='secondary'  text='8'       pre={uptext}     update={setUptext} />
            <Btn color='secondary'  text='9'       pre={uptext}     update={setUptext} />
            <Btn color='info'       text='x'       pre={uptext}     update={setUptext}  setOper={setOper}/>
        </div>
        <div className='btton'>
            <Btn color='secondary'  text='5'       pre={uptext}    update={setUptext}  />
            <Btn color='secondary'  text='4'       pre={uptext}    update={setUptext}  />
            <Btn color='secondary'  text='6'       pre={uptext}    update={setUptext}  />
            <Btn color='info'       text='-'       pre={uptext}    update={setUptext}  setOper={setOper}/>
        </div>
        <div className='btton'>
            <Btn color='secondary' text='1'        pre={uptext}    update={setUptext}  />
            <Btn color='secondary' text='2'        pre={uptext}    update={setUptext}  />
            <Btn color='secondary' text='3'        pre={uptext}    update={setUptext}  />
            <Btn color='info'      text='+'        pre={uptext}    update={setUptext}  setOper={setOper}/>
        </div>
        <div className='btton'>
            <Btn color='info'      text='x^2'      pre={uptext}    update={setUptext}  opersq={opersq} />
            <Btn color='secondary' text='0'        pre={uptext}    update={setUptext} />
            <Btn color='info'      text='.'        pre={uptext}    update={setUptext}  operpoint={operpoint}/>
            <Btn color='success'   text='='        pre={uptext}    update={setUptext}  />
        </div>
    </div>
  )
}

export default Buttons
