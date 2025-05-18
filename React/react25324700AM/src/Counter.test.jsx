import { render,screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe('Counter Component',()=>{

    test('Initial Count is 0',()=>{
        render(<Counter />);
        expect(screen.getByTestId('count')).toHaveTextContent("Count: 0");
    })

    test('increment count',async ()=>{
        render(<Counter />);
        const incrementButton=screen.getByText('Increment');
        await userEvent.click(incrementButton);
        expect(screen.getByTestId('count')).toHaveTextContent('Count: 1');
    })

    test('derements count',async ()=>{
        render(<Counter />);
        const incrementButton=screen.getByText('Increment');
        const decrementButton=screen.getByText('Decrement');
        await userEvent.click(incrementButton); //count=1
        await userEvent.click(decrementButton); //count=0

        expect(screen.getByTestId('count')).toHaveTextContent('Count: 0');
    })


    test('Reset count',async ()=>{
        render(<Counter />);
        const incrementButton=screen.getByText('Increment');
        const resetButton=screen.getByText('Reset');
        await userEvent.click(incrementButton); //count=1
        await userEvent.click(resetButton); //count=0

        expect(screen.getByTestId('count')).toHaveTextContent('Count: 0');
    })


})