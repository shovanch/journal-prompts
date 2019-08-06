import React, { Component } from 'react';
import Header from 'components/Header/Header';
import  Footer from 'components/Footer/Footer';
import Content from 'components/Content/Content'
import Select from 'components/Select/Select'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Content>
          <Select />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
