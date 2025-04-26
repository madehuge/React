import './App.css';
import Header from './Components/Header';
import ClassComponent from './Components/ClassComponent';
import Home from './Components/Home';
import PropsConcepts from './Components/PropsConcepts';
import Counter from './Components/CounterUsingClassComponents';
import Counts from './Components/CounterFunctionsBased';

function App() {
  let age1 = 25;
  let age2 = 45;

  return (
    <div className="App">
      <Header />
      <Counter number={0} />
      <Counts number={0} />
      <ClassComponent name="Ravi" age={1}/>
      <ClassComponent name="Ravi">
        <p>Class Children 1 Using Children Props</p>
      </ClassComponent>
      <ClassComponent name="Ravi">
         <p>Class Children 2 Using Children Props</p>
      </ClassComponent>
      <Home />
      <PropsConcepts name="Manish"/>
      <PropsConcepts name="Manish" age={age1}/>
      <PropsConcepts name="Manish" age={age2}>
        <p>Children 1</p>
      </PropsConcepts>
      <PropsConcepts name="Manish 2" age="307">
        <p>Children 2</p>
      </PropsConcepts>
    </div>
  );
}

export default App;
