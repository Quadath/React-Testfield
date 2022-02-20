import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 14
    }
    // this.nextYear = () => {
    //   this.setState(state => ({
    //     years: ++state.years
    //   }))
    // }

    //Way 2
    this.nextYear = this.nextYear.bind(this);
  }
  // nextYear = () => {
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  //   // this.state.years++; WRONG
  // }

  nextYear() {
    this.setState(state => ({
      years: ++state.years
    }))
    // this.state.years++; WRONG
  }
  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
       <button onClick={this.nextYear}>++</button>
         <h1>My name is {name}, surname - {surname}, years {years} </h1>
        <a href={link}>My profile</a>
      </>
    )
  }
}

const All = () => {
    return (
      <>
        <WhoAmI name="Jonh" surname="Smith" link="https://facebook.com"/>
        <WhoAmI name="Jame" surname="N" link="https://facebook.com"/>
        <WhoAmI name="Bruh" surname="Smith" link="https://facebook.com"/>
      </>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <All/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
