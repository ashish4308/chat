import Chat from './components/Chat'
import Signin from './components/Signin';
import './App.css';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase';


function App() {
  const [user]=useAuthState(auth);
  console.log(user)
  

  return (
    <div className="App">
      { user? <Chat /> : <Signin />  }
        
        
    </div>
  );
}

export default App;
