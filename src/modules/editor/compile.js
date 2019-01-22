import {transform} from '@babel/standalone'

export default function (code) {
  return transform(
    code,
    {
      presets: ['react']
    }
  ).code
}
