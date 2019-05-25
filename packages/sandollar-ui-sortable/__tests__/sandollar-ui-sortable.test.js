'use strict';

import SorTable from '..'
import React from 'react'
import { shallow } from 'enzyme'

describe('@fuzzybits/sandollar-ui-sortable', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SorTable />)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders', () => {
    expect(wrapper.contains(<div>test</div>)).toBe(true)
  })
});
