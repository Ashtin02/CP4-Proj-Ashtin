import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import ProductList from "../components/ProductList"
import "@testing-library/jest-dom"


test('should Load a List fo Products', () => {

    const testProducts = [
         {
            name: "Air Tag",
        image: "AirTag.jpg",
        Desc: "Locater made by Apple.",
        Category: "Accessory",
        Price: "25"
        }, 
        {
            name: "Air Pods Max",
            image: "AirPodsMax.jpg",
            Desc: "HeadPhones made by Apple",
            Category: "Accessory", 
            Price:"350"
        }
    ]

    const mockOnClick = jest.fn();
    const mockRemove = jest.fn();

    render(<ProductList products={testProducts} onClick={mockOnClick} remove={mockRemove} />)

    expect(screen.getByText("Air Tag"))
    expect(screen.getByText("Air Pods Max"))
    expect(screen.getByText("$25"))
    expect(screen.getByText("$350"))

    const removeButton = screen.getAllByText("Delete Product")
    fireEvent.click(removeButton[0])

    expect(mockRemove).toHaveBeenCalled()

    const viewButtons = screen.getAllByText("View More")

    fireEvent.click(viewButtons[0])
    expect(mockOnClick).toHaveBeenCalled();
})
