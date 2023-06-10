import * as React from "react"
import { useState } from "react"

interface Props {
  text?: string
}

export function Tile({ text }: Props): JSX.Element | null {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }
  return (
    <button
      className="bg-gray-200 hover:bg-gray-300 bottom border border-solid border-gray-400 hover:border-gray-500 rounded p-2 m-2"
      data-testid="tile"
      onClick={(): void => {
        setIsVisible(false)
      }}
    >
      {text}
    </button>
  )
}
