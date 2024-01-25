import Layout from './components/layout/layout';
import {useCallback} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getLocation} from "./redux/action/actionCreators";
function App() {
  return (
    <div className='px-40 py-2 sm:px-0'>      
      <Layout/>
    </div>

  );
}

export default App;

