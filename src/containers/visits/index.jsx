import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'admin-on-rest';

const VisitList = props => (
  <List title="Visitas" {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="Visit" source="id" reference="visits">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="username" />
      <TextField source="email" />
    </Datagrid>
  </List>
);

export default VisitList;
