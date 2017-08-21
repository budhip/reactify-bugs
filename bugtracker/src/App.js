import React, { Component } from 'react';
import Judul from './components/Judul';
import AddBugs from './components/AddBugs';
import Footer from './components/Footer'
import DaftarBug from './components/DaftarBug';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Judul />
          <AddBugs />
          <DaftarBug />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
