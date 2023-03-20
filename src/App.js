
import './App.css';
import Adress from './Components/Profile/Adress';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
