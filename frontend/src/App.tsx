import './App.css';
import { IMAGES } from './constants/images';
import GetRoutes from './routes/Routing';

const App = () => {
  return (
    <div className="App">
      <GetRoutes />
      <img src={IMAGES.degrify_logo} alt="logo" />
    </div>
  );
}

export default App;
