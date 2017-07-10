import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import useChaiAssertions from './jest-chai'
import useLazyVariables from './lazy'

require('jest-enzyme/lib/index')

chai.use(chaiEnzyme())

useChaiAssertions()
useLazyVariables()

global.context = global.describe
global.fcontext = global.fdescribe

axios.defaults.adapter = httpAdapter
process.env.API_URL = 'http://localhost'

beforeAll(() => {
  window.requestAnimationFrame = () => {
  }
  window.cancelAnimationFrame = () => {
  }
})