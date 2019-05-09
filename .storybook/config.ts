import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { withConsole } from '@storybook/addon-console'

function loadStories() {
    addDecorator(withInfo)
    addDecorator(withKnobs)
    addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    addDecorator(withA11y)
    addParameters({
        backgrounds: [
            { name: 'Beige', value: '#efedce', default: true },
            { name: 'Blue', value: '#316ae2' },
            { name: 'Red', value: '#e84343' },
            { name: 'Black', value: '#000000' },
        ],
    })
    const req = require.context('../src', true, /\.stories\.tsx$/)
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
