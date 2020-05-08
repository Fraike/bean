import React, {FunctionComponentElement, useContext, useState} from "react";
import classNames from "classnames";

import { MenuContext } from './Menu'
import { MenuItemProps} from "./MenuItem";

export interface SubMenuProps {
    index ?: number
    title: string
    className ?: string
    children: React.ReactNode
}

const SubMenu: React.FC<SubMenuProps> = ({index, title, className,children}) => {
    const [ menuOpen, setOpen ] = useState(false)
    const context = useContext(MenuContext)

    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    })

    const renderChildren = () => {
        const subMenuClasses = classNames

        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            if(childElement.type.displayName === 'MenuItem'){
                return child
            }else {
                console.error('Warning: Menu has a child which is not a MenuItem')
            }
        })
        return (
            <ul className="viking-submenu">
                {childrenComponent}
            </ul>
        )
    }

    return (
        <li key={index} className={classes}>
            <div className="submenu-title">
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
