import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Header from "../components/Header"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"


test('should Render Header Accurately ', () => {

    render( <BrowserRouter><Header /></BrowserRouter>)

    expect(screen.getByText("Login")).toBeInTheDocument()
    expect(screen.getByText("Shop")).toBeInTheDocument()
})
