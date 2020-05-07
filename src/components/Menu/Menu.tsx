import React, {createContext, useState} from "react";
import classNames from "classnames";

type MenuMode = 'horizontal' | 'vertical'

type SelectCallback = (selectedIndex: number) => void

export interface MenuProps {
    defaultIndex ?: number
    className ?: string
    mode ?: MenuMode
    style ?: React.CSSProperties
    children ?: React.ReactNode
    onSelect ?: SelectCallback
}

interface IMenuContext {
    index: number
    onSelect ?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: React.FC<MenuProps> = (props) => {
    const {
        defaultIndex,
        className,
        mode,
        style,
        onSelect,
        children
    } = props

    const [ currentActive, setActive ] = useState<number>(defaultIndex as number)

    const classes = classNames('viking-menu', className, {
        'menu-vertical': mode === "vertical"
    })

    const handleClick = (index: number) => {
        setActive(index)
        if(handleClick){
            handleClick(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive,
        onSelect: handleClick
    }

    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu
