import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { Tile } from './Tile'

storiesOf('Tile', module).add(
    'Default',
    (): JSX.Element => (
        <>
            <Tile text={text('Text','My Story')} />
        </>
    )
)
