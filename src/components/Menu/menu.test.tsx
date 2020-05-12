import React, {createElement} from "react";
import { render, RenderResult, fireEvent, cleanup, wait } from '@testing-library/react'
import Menu, { MenuProps} from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./subMenu";

const testProps: MenuProps = {
    defaultIndex: '0',
    onSelect: jest.fn(),
    className: 'test'
}

const testVerProps: MenuProps = {
    defaultIndex: '0',
    mode: "vertical"
}

const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem>
                active
            </MenuItem>
            <MenuItem  disabled>
                disabled
            </MenuItem>
            <MenuItem>
                link 1
            </MenuItem>
            <SubMenu title="sub">
                <MenuItem>dropdown1</MenuItem>
                <MenuItem>dropdown2</MenuItem>
                <MenuItem>dropdown3</MenuItem>
            </SubMenu>
        </Menu>
    )
}

const createStyleFile = () => {
    const cssFile: string = `
        .viking-submenu {
            display: none
         }
         .viking-submenu.menu-opened {
            display: block
         }
    `
    const style = document.createElement("style")
    style.type = 'text/css'
    style.innerHTML = cssFile
    return style
}

let wrapper:RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement, subMenuElement: Element

describe('test Menu Component', () => {
    beforeEach(()=>{
        wrapper = render(generateMenu(testProps))
        wrapper.container.append(createStyleFile())
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
        subMenuElement = wrapper.getByTestId('sub-menu')
    })
    it('should render correct menu and menuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('viking-menu')
        expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
        expect(disabledElement).toHaveClass('is-disabled')
    });

    it('should items should change active and call the right callback', function () {
        const thirdItem = wrapper.getByText('link 1')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith('2')
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
    });

    it('should render correct menu and menuItem based on default props', function () {
        cleanup()
        const wrapper = render(generateMenu(testVerProps))
        const menuElement = wrapper.getByTestId('test-menu')
        expect(menuElement).toHaveClass('menu-vertical')
    });

    it('should show dropdown items when hover on submenu',  async () => {
        expect(wrapper.queryByText('dropdown1')).not.toBeVisible()
        const dropdownElement = wrapper.getByText('sub')
        fireEvent.mouseEnter(dropdownElement)
        await wait(()=>{
            expect(wrapper.queryByText('dropdown1')).toBeVisible()
        })
        fireEvent.click(wrapper.getByText('dropdown1'))
        expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
        fireEvent.mouseLeave(dropdownElement)
        await wait(()=>{
            expect(wrapper.queryByText('dropdown1')).not.toBeVisible()
        })
    });
})
