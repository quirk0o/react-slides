import {transform} from 'babel-standalone'

export default function (code) {
  return transform(
    code,
    {
      presets: ['latest', 'react'],
      plugins: ['transform-object-rest-spread']
    }
  ).code
}
