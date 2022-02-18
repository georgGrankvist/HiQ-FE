import './App.css';
import { FileUpload } from './components/FileUpload';
import logo from './hiq_logo.jpg'

const App = () => (
<div className="container"> 
  <img className = "photo" src={logo} />
  <h1>Technical test text transformer</h1>
  <p className="lead">
 by Georg Grankvist, System Development Malmö University
</p>
  <FileUpload/>
  </div>
);

export default App;
