import {Router} from 'express'

const app = Router()

app.get('/test', (req, res) => {
  res.send('OK')
})

export default app