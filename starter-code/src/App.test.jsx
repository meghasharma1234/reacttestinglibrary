import {fireEvent, render, screen} from "@testing-library/react";
import App from "./App";

test("sample test", ()=>{
    render(<App />);
    let header = screen.getByRole("heading", {name: /testing/i});
    expect(header).toBeInTheDocument();
})

// test ("button click flow", ()=>{
//     render(<App />)
//     //check if button is initially red
//     let button = screen.getByRole("button", {name: /click to make/i})
//     expect(button).toHaveClass("red");

//     //simulate button click
//     fireEvent.click(button);
    
//     //check if button is blue
//     expect(button).toHaveClass("blue");
// })

test("checkbox with button click flow", ()=> {
    render(<App />)

    //check if checkbox is enabled
    let checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    let button = screen.getByRole("button", {name: /click to make/i})
    expect(button).toBeDisabled();


    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();

    expect(button).toHaveClass("red");
    
    //simulate button click
    fireEvent.click(button);
    
    //check if button is blue
    expect(button).toHaveClass("blue");

})


