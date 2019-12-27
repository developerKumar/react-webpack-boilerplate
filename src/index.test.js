import React from 'react'
import { shallow } from 'enzyme'

// Components
import Index from './index'

function setup() {
  const props = {
    imgPath: 'some/image/path/to/a/mock/image',
  }
  const wrapper = shallow(<Index />)
  return { wrapper, props }
}

describe('Hello from My Component Test Suite', () => {
  it('Should have a tag', () => {
    const { wrapper } = setup()
    expect(wrapper.find('h1').exists()).toBe(true)
  })
})
