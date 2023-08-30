import Buttons from "./components/Buttons";
import React,{useState} from 'react'
import Input from "./components/Input";
import Navbar from "./components/Navbar";


function App() {
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState('');
  return (
    <>
      <Navbar/>
    <div className="container">
      <Input text={text} keyboard={setText}/>
      <Buttons  write={text} setText={setText} setAnswer={setAnswer} answer={answer} />
    </div>
    </>
  );
}

export default App;
