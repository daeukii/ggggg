import './App.css';
import Slick from './components/Slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faImage} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faBomb} from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <div className="App">
      <Slick/>
      <FontAwesomeIcon className='ic' icon={faHome}/>  
      <FontAwesomeIcon className='ic' icon={faUser}/> 
      <FontAwesomeIcon className='ic' icon={faCheck}/>
      <FontAwesomeIcon className='ic' icon={faImage}/>
      <FontAwesomeIcon className='ic' icon={faPhone}/>
      <FontAwesomeIcon className='ic' icon={faStar}/>
      <FontAwesomeIcon className='ic' icon={faBomb}/>
    </div>
  );
}

export default App;
