import React from 'react';
import ReactDOM from 'react-dom/client';

import Navigation from '../component/navigation/Navigation';
import Home from './home/Home';
import Login from './login/Login';
import Test from './test/test';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {menuItems: [], treeList: [], menuIndex: 0}
    this.state.menuItems = [
        {
          label: <div id='home' onClick={this.onMenuClick.bind(this, 0)}>Numerology</div>,
          key: 'numerology',
        },
        {
          label: <div id='login' onClick={this.onMenuClick.bind(this, 1)}>Login</div>,
          key: 'login',
        },
        ,
        {
          label: <div id='test' onClick={this.onMenuClick.bind(this, 2)}>Tests</div>,
          key: 'test',
        }
    ]
  }

  onMenuClick(activeIndex) {
    const homeContainer = ReactDOM.createRoot(document.getElementById('app-container'));
    
    switch(activeIndex) {
        case 0:
            homeContainer.render(<Home/>);
            break;
        case 1:
            homeContainer.render(<Login/>);
            break;
        case 2:
            homeContainer.render(<Test/>);
            break;
        default:
          break;
    }
  }

  render() {
    return (
      <div className="App">
          <div><Navigation menuItems={this.state.menuItems} mode={'horizontal'}></Navigation></div>
          <div id='app-container' className='App-container' >
            <Home/>
          </div>
      </div>
    );
  }

}

export default App;
