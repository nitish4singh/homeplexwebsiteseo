import "./App.css"
import Pages from "./components/pages/Pages"
import ReactGa from 'react-ga';
import {useEffect} from 'react';
ReactGa.initialize('G-NTVKNLC6Y7');
function App() {
useEffect(()=>{
  ReactGa.pageview(window.location.pathname  + window.location.search)
},[]);
  return <Pages />
}

export default App