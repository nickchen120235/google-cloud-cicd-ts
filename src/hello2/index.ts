import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions'

const hello2: HttpFunction = (req, res) => {
  if (req.method !== 'GET') return res.status(405).send(`${req.method} is not allowed.`)
  res.status(200).send(`Hello, World2! ${process.env.npm_package_version}`)
}

export default hello2
