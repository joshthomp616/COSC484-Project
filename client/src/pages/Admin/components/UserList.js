//Userlist component will reorder the rows so that the last four appear first
import { Datagrid, EmailField, List, TextField, } from 'react-admin';

export const UserList = (props) => (
    <List{...props}>
        <Datagrid rowClick="edit">
            
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="password" type="password"/>
        </Datagrid>
    </List>
);