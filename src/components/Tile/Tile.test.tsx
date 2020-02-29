import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Tile } from './Tile'
import '@testing-library/jest-dom'

const text = 'My Test'

describe('Tile', () => {
    beforeEach(cleanup)

    it('Should show a Tile with the text passed in', () => {
        const { getByText } = render(<Tile text={text} />)
        expect(getByText(text)).toBeVisible()
    })

    it('Should hide Tile when clicked', () => {
        const { queryByText, getByTestId } = render(<Tile text={text} />)

        expect(queryByText(text)).toBeVisible()

        fireEvent.click(getByTestId('tile'))

        expect(queryByText(text)).not.toBeInTheDocument()
    })
})
