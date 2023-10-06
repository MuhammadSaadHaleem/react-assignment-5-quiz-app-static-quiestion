import { useState } from 'react';
import './App.css';


const questions = [
  {
    title: 'What is HTML?',
    options: ['Hyper Text Markup Language', 'Hyper Test Markup Language', 'Hyper Text Markup ', 'Hyper  Markup Language'],
    correctAnswer: 'Hyper Text Markup Language'
  },
  {
    title: 'What is CSS?',
    options: ['Caat Seen Seen', 'Cut So So', 'Cascading Stylesheet', 'Mujhe nahi pata'],
    correctAnswer: 'Cascading Stylesheet'
  },
  {
    title: 'What is JS?',
    options: ['Jao sahi se', 'Java', 'Javascript', 'Jiye Sarkar'],
    correctAnswer: 'Javascript'
  },
  {
    title: 'What is React?',
    options: ['Jao sahi se', 'Java', 'Javascript', 'Jiye Sarkar'],
    correctAnswer: 'Javascript'
  }
];


function App() {

  const [questionNo, setQuestionNo] =useState(0)
  const [answer,setAnswer] = useState()
  const [score,setScore] = useState(0)
  const [quizQuestion, setQuizQuestion] = useState(false)


  function update(e){
    const answer = e.target.value
    setAnswer(answer)
    
  }

  function nextQuestion(){
    checkAnswer()

    let temp = questionNo

    setQuestionNo(++temp)
  }


  function checkAnswer(){

    if (answer=== questions[questionNo].correctAnswer){
      let temp = score

      setScore(++temp)

    }

  }

  function finish(){

    
    setQuizQuestion(true)
    checkAnswer()
  }

  function restart(){
    setQuestionNo(0)
    setScore(0)
    setQuizQuestion(false)


  }


  


  return (
    <div className="App">
      <header className="App-header">

        {!quizQuestion ? <div><h4>{ questions[questionNo].title} </h4>

        {questions[questionNo].options.map((item)=>{
          return <div><input checked={answer===item} type="radio" onChange={update} name='q1' value={item} />{item}</div>
        })}

        {questionNo<questions.length-1 && <button onClick={nextQuestion}>Next</button>}

        {questionNo===questions.length-1 && <button onClick={finish}>Finish</button>}</div>:

        <div> your result is {score} out of {questions.length} <button onClick={restart}>Restart</button></div>}

        

        
       
      </header>
    </div>
  );
}

export default App;
