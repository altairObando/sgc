import React from 'react';


export const Context = React.createContext({});
export const ContextProvider = Context.Provider;

const ContactContext = ({ children }) => {
    const [values, setValues] = React.useState({ default: 'No items defined' });
    return <ContextProvider value={[ values, setValues ]}>
        {children}
    </ContextProvider>
}

export default ContactContext;