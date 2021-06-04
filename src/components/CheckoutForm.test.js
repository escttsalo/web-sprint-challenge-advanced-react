import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const submit = screen.getByRole('button')
    userEvent.click(submit);

    await waitFor(() => {
        const success = screen.queryByTestId(/successMessage/i);

        expect(success).toBeInTheDocument();
    })
});
