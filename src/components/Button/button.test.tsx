import React from "react";
import { render } from '@testing-library/react'
import Button from "./button";

describe('test button component', () => {
    it('should render the correct default button', function () {
        const wrapper = render(<Button>hello</Button>)
        const element = wrapper.getByText('hello')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
    });
    it('should render a link when btnType equals link and is provided', function () {

    });
})
