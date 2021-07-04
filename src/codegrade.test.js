import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from "./App.js";

const correctUsername = "Lambda";
const correctPassword = "School";

const doLogin = (username, password)=> {
    const nameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");

    userEvent.clear(nameInput);
    userEvent.type(nameInput, username);

    userEvent.clear(passwordInput);
    userEvent.type(passwordInput, password);
    
    const button = document.querySelector("#submit");
    userEvent.click(button);
}

describe("Login Authentication", ()=>{
    test("App does nothing when login incorrect username", async ()=>{
        render(<App />);
        
        doLogin('notFound', correctPassword);

        await waitFor(()=> {
            const errorMessage = document.querySelector("#error");
            expect(errorMessage).toBeTruthy();
        })
        
    });
    
    test("App does nothing when login incorrect password", async ()=>{
        render(<App />);
        
        doLogin(correctUsername, 'notFound');
        
        await waitFor(()=> {
            const errorMessage = document.querySelector("#error");
            expect(errorMessage).toBeTruthy();
        });
    });

    test("App navigates to /bubbles when correct username/password is given", async ()=>{
        render(<App />);
        doLogin(correctUsername, correctPassword);

        await waitFor(()=>{
            const bubblesTitle = screen.getByText(/bubbles/i);
            expect(bubblesTitle).toBeTruthy();

            const colorTitle = screen.getByText(/colors/i);
            expect(colorTitle).toBeTruthy();
            
        });
    });
});

describe("Color Interface", ()=>{
    test("When navigating to /bubbles, all colors are loaded and displayed from server.", async ()=>{
        render(<App />);
        
        await waitFor(()=> {});
        await waitFor(()=>{
            const colors = screen.getAllByTestId(/color/i);
            expect(colors).toHaveLength(11);
        });
    });
    
    test("When a color is clicked, edit menu appears.", async ()=>{
        render(<App />);
        
        await waitFor(()=> {});
        const colors = await screen.findAllByTestId(/color/i);
        const firstColor = colors[0];
        userEvent.click(firstColor);
        
        await waitFor(()=> {});
        const editMenuText = await screen.findByTestId(/edit_menu/i);
        expect(editMenuText).toBeTruthy();
    });
    
    test("When the cancel button is clicked, edit mode is turned off.", async ()=>{
        render(<App />);
        
        await waitFor(()=> {});
        let colors = await screen.findAllByTestId(/color/i);
        let firstColor = colors[0];
        userEvent.click(firstColor);
    
        const button = screen.getByTestId("cancel_button");
        userEvent.click(button);
        
        await waitFor(()=> {});
        await waitFor(()=>{
            const editMenu = screen.queryByTestId('edit_menu');
            expect(editMenu).toBeFalsy();
        });
    });
});