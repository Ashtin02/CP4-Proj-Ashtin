import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import ProductDetails from "../components/ProductDetails"
import "@testing-library/jest-dom"


test('should Load a products Details correctly', () => {

    const MockProduct = {
        name: "Air Tag",
        image: "AirTag.jpg",
        Desc: "Locater made by Apple.",
        Category: "Accessory",
        Price: "25"
    }

    render(<ProductDetails product={MockProduct} />)

    expect(screen.getByText("Air Tag")).toBeInTheDocument()
    expect(screen.getByAltText("Image coming soon")).toHaveAttribute("src")
    expect(screen.getByText("$25")).toBeInTheDocument();
    expect(screen.getByText("Locater made by Apple.")); 

    expect(screen.getByRole("button"));

    fireEvent.click(screen.getByText("Buy Now"))

    expect(screen.getByText("Please click confirm to purchase the product."))

    fireEvent.click(screen.getByText("Confirm"));

  
})
