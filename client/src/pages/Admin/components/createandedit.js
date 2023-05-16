import { Create, SimpleForm, TextInput, Edit, required } from 'react-admin';

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="email" type="email" validate={required()} />
      <TextInput source="password" type="password" validate={required()} />
    </SimpleForm>
  </Create>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="email" type="email" validate={required()} />
      <TextInput source="password" type="password" validate={required()} />
    </SimpleForm>
  </Edit>
);