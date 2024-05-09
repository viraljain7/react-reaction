import { useContext, createContext } from 'react';

const UserContext = createContext({
});


export const UserProvider = UserContext.Provider;

export default function useUser() {
    return useContext(UserContext)
}

