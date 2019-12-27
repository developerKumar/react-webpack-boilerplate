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

describe('Index has h1 tag ', () => {
  it('Should have a tag', () => {
    const { wrapper } = setup()
    expect(wrapper.find('h1').exists()).toBe(true)
  })
})

describe('Index has Hello from My Component text ', () => {
  it('Should have a tag', () => {
    const { wrapper } = setup()
    expect(wrapper.text()).toEqual('Hello from My Component');
  })
})
