import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  CreateButton,
} from "react-admin";

import { PostFilter } from "./FilterPost";

export const PostList = props => (
  <List filters={<PostFilter />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="Address" />
      <TextField source="Email" />
      <TextField source="Dob" />
      <TextField source="Phone" />
      <TextField source="Exposed?" />
      <TextField source="Positive?" />
      <TextField source="Vaccinated?" />
      <TextField source="Continuous Exposure?" />
      <TextField source="Symptoms?" />
      <TextField source="Clear to return" />
      <CreateButton />
      <EditButton />
    </Datagrid>
  </List>
);