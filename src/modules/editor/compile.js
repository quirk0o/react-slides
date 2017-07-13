import Babel, * as babelAll from 'babel-standalone'

console.log(Babel, babelAll)

export default function (code) {
  return babelAll.transform(
    code,
    {
      presets: ['latest', 'react']
    }
  ).code
}
