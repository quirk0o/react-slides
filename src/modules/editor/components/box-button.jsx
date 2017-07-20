import React from 'react'
import glamorous from 'glamorous'

import {Button} from 'modules/base'

const BoxButton = glamorous(Button)({
  position: 'absolute',
  top: 10,
  right: 10
})

export default BoxButton