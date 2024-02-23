import {createContext} from "react";

const Context = createContext(null);
const ContextProvider = ({children}) => {
    return (
        <div>
            <ContextProvider value={'hahahah'}>
                {children}
            </ContextProvider>
        </div>
    );
};

export {
    ContextProvider,
    Context
};