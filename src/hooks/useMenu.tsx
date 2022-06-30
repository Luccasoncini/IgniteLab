import { createContext, ReactNode, useContext, useState } from 'react'

interface MenuProviderProps {
    children: ReactNode;
}

interface MenuContextData {
    isMenuOpened: boolean;
    handleToggleMenu: () => void;
}

export const MenuContext = createContext<MenuContextData>(
    {} as MenuContextData
);

export function MenuProvider({ children }:MenuProviderProps) {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    function handleToggleMenu() {
        var Body = document.getElementById('body');
        Body?.classList.toggle('body-overflow');

        setIsMenuOpened(!isMenuOpened)
    }

    return(
        <MenuContext.Provider value={{isMenuOpened, handleToggleMenu}} >
            {children}
        </MenuContext.Provider>
    )
}


export function useMenu() {
    const context = useContext(MenuContext)

    return context;
}