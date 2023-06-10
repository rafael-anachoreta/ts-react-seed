import * as React from "react"
import { Tile } from "./Tile"

describe("<Tile />", () => {
  it("render with no text by default", () => {
    cy.mount(<Tile />)
  })

  it("render with text when passed in", () => {
    const text = "Hello, World!"
    cy.mount(<Tile text={text} />)

    cy.get("[data-testid=tile]").contains(text)
  })

  it("disappears when clicked", () => {
    cy.mount(<Tile />)

    cy.get("[data-testid=tile]")
      .should("be.visible")
      .click()
      .should("not.exist")
  })
})
