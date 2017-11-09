import React from 'react';
import { List, Datagrid, ChipField, TextField, BooleanField, ReferenceField, DateField } from 'admin-on-rest';

const DeliveryList = props => (
  <List title="Encomiendas" {...props}>
    <Datagrid>
      <ReferenceField label="Fecha de recepción" source="id" reference="deliveries">
        <DateField source="reception_date" />
      </ReferenceField>
      <ChipField source="status" />
      <TextField source="received_by" />
      <BooleanField source="delivered" />
    </Datagrid>
  </List>
);

export default DeliveryList;
