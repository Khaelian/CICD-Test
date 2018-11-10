import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import chalk from 'chalk'

const app = express()
const port = process.env.port || 8080

app.use(bodyParser.json())


app.use('/api', routes)

app.use(express.static('build'))

app.listen(port, () => {
  console.log(chalk.blue(`App available on port ${chalk.yellow(port)}.`))
})