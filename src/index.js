import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//App.js라는 애를 아이디가 root인 애한테 랜더(출력)한다.
//root는 public의 index.html에 있다.
registerServiceWorker();
