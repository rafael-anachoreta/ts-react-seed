import { addParameters, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)
addParameters({
    backgrounds: [
        { name: 'Default', value: ' #f3e5e2 ', default: true },
        { name: 'Red', value: '#d94747' },
        { name: 'Dark', value: '#02020d' },
    ],
})
