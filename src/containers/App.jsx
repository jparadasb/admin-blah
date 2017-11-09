import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import VisitList from './visits';
import DeliveryList from './deliveries';

const App = () => (
  <Admin restClient={jsonServerRestClient('http://localhost:9000')}>
    <Resource name="visits" list={VisitList} />
    <Resource name="deliveries" list={DeliveryList} />
    <Resource name="playground" />
    <Resource name="newsletters" />
  </Admin>
);

export default App;
