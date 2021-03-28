import React, { ComponentProps } from 'react'

import { Meta, Story } from '@storybook/react'

import { NavBar } from '../components/NavBar'

export default {
    title: 'Main/NavBar',
    component: NavBar
} as Meta

const Template: Story<ComponentProps<typeof NavBar>> = (args) => <NavBar {...args} />

export const NormalNav = Template.bind({})