import './App.css';
import Header from './component/Header/Header';
import Question from './component/Questions/Question';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className='bg'>
      <Header></Header>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
