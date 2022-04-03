import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tile } from './Tile'

export default {
    title: 'Example/Tile',
    component: Tile,
    parameters: {
        actions: {
            handles: ['click'],
        },
    },
} as ComponentMeta<typeof Tile>

const Template: ComponentStory<typeof Tile> = args => <Tile {...args} />

export const WithText = Template.bind({})
WithText.args = {
    text: 'Text',
}

export const WithoutText = Template.bind({})
WithoutText.args = {}
