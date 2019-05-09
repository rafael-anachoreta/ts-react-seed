import * as React from 'react'
import { useState } from 'react'
import './Tile.css'

interface Props {
    text?: string;
}

export function Tile({ text }: Props): JSX.Element | null {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) {
        return null
    }
    return (
        <div
            className="tile"
            data-testid="tile"
            onClick={(): void => {
                setIsVisible(false)
            }}
        >
            {text}
        </div>
    )
}
