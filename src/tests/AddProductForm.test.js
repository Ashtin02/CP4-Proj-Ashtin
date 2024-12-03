import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import AddProductForm from "../components/AddProductForm"

test('should Add a product to the List if it does not already exist', () => {
    const addProduct = jest.fn();

    render(<AddProductForm addProduct={addProduct} />)

    fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Air Tag" } });
    fireEvent.change(screen.getByPlaceholderText("Image"), { target: { value: "AirTag.jpg" } });
    fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "Locater made by Apple." } });
    fireEvent.change(screen.getByPlaceholderText("Price"), { target: { value: "25" } });
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "Accessory" } });

    fireEvent.submit(screen.getByText("Add/Edit Product"));

    expect(addProduct).toHaveBeenCalledWith({
        name: "Air Tag",
        image: "AirTag.jpg",
        Desc: "Locater made by Apple.",
        Category: "Accessory",
        Price: "25"
    })

})
