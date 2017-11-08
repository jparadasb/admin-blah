import React, { Component } from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList } from './posts';
import { VisitList } from './containers/visits';
import { DeliveryList } from './containers/deliveries';

class App extends Component {
  render() {
    return (
      <Admin restClient={jsonServerRestClient('http://localhost:9000')}>
        <Resource name="visits" list={VisitList}/>
        <Resource name="deliveries" list={DeliveryList}/>
        <Resource name="playground"/>
        <Resource name="newsletters"/>
      </Admin>
    );
  }
}

export default App;
