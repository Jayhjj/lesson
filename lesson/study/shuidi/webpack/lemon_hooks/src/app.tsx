import * as React from 'react';
import { HelloComponent } from './hello';
export const App = () =>{
    const  [name,setName] = React.useState('initName');
    const setUsernameState = (event:React.onChange<HTMLInputElement>) =>{
        setName(event.target.value);
    }
    return(
        <>
         <HelloComponent userName = {name}/>
         <NameEditComponetn useName={name} onChange={setUsernameState}/>
        </>
    )
}