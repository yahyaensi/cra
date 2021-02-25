import { useEffect } from "react"
import logo from './logo.svg';
import './App.css';
import TestComponent from '@/components/TestComponent';

function messageHandler(event) {
	if (event && event.data === 'Authentication succeeded') {
		// refresh imti iframe after Authentication success
		let iframe = document.getElementById('imtiIframe');
		iframe.src = iframe.src;
	}
}

function App() {
	
  useEffect(() => {
		window.addEventListener("message", messageHandler, false);

		return function cleanup() {
			window.removeEventListener("message", messageHandler, false)
		}
  });

  return (
    <div className="App">
		yahya
    </div>
  );
}

export default App;
