import * as React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import { Tile } from './Tile'
import 'jest-dom/extend-expect'

const text = 'My Test'

describe('Tile', (): void => {
    beforeEach(cleanup)

    it('Should show a Tile with the text passed in', (): void => {
        const { getByText } = render(<Tile text={text} />)
        expect(getByText(text)).toBeVisible()
    })

    it('Should hide Tile when clicked', (): void => {
        const { queryByText, getByTestId } = render(<Tile text={text} />)

        expect(queryByText(text)).toBeVisible()

        fireEvent.click(getByTestId('tile'))

        expect(queryByText(text)).not.toBeInTheDocument()
    })
})
