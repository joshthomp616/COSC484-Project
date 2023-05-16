import * as React from 'react';
import { Admin, Create, SimpleForm, TextInput, Edit, Resource, ListGuesser, Layout } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./UserList";
import UserIcon from '@mui/icons-material/People';
import CustomAppBar from "./CustomAppBar";
import { UserEdit } from "./createandedit";
import { UserCreate } from "./createandedit";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AppBarLayout = (props) => <Layout {...props} appBar={CustomAppBar} />;

const Apps = () => (
  <Admin layout={AppBarLayout} dataProvider={dataProvider}>
    <Resource
      name="admin"
      options={{ label: "Users" }}
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
      icon={UserIcon}
    />
    <ListGuesser resource="posts" />
  </Admin>
);

export default Apps;

