import { createContext, useEffect, useState } from "react";
import getState from "./Flux";

export const StarWarsContext = createContext(null);

const injectContext = PassedComponent => {

    const Context = props => {
        const [ state, setState ] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updateStore => setState({
                store: Object.assign(state.store, updateStore),
                actions: { ...state.actions }
            })
        }))

        useEffect(() => {

        },[])

        return(
            <StarWarsContext.Provider value={state}>
                <PassedComponent {...props} />
            </StarWarsContext.Provider>
        )
    }
    return Context;
};

export default injectContext;

