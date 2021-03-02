import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Userlist extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {person: []};
    }
  
    componentDidMount() {
      this.Userlist();
    }
  
    Userlist() {
      $.getJSON('http://127.0.0.1:8000/apiview/')
        .then(({ records }) => this.setState({ person: records}));
    }
  
    render() {
      const persons = this.state.person.map((item, i) => (
        <div>
          <h1>{ item.fullname }</h1>
          <span>{ item.number }, { item.email }, {item.image},</span>
          
        </div>
      ));
  
      return (
        <div id="layout-content" className="layout-content-wrapper">
          <div className="panel-list">{ persons }</div>
        </div>
      );
    }
  }

  