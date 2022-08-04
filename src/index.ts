import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions'
import hello2 from './hello2'

type Routes = { [key: string]: HttpFunction }

const ROUTES: Routes = {
  hello: (_, res) => res.status(200).send('Hello, World!'),
  hello2, 
}

export const main: HttpFunction = (req, res) => {
  if (ROUTES[req.path.substring(1)]) return ROUTES[req.path.substring(1)](req, res)
  else res.status(404).send('Not Found')
}
