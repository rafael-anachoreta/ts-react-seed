import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Tile } from './Tile'

storiesOf('Tile', module).add(
    'Default',
    (): JSX.Element => (
        <>
            <Tile text={'My Story'} />
        </>
    )
)
