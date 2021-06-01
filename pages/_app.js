import Destination from '../src/components/Destination/Destination';
import '../src/styles/global.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';
import BackGroundImg from '../public/images/background.svg';


export default function App() {
    return (
      <div className="content">
        <BackGroundImg className="content-bg" />
        <Destination  />
      </div>
   )
  }