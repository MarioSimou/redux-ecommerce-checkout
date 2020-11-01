import express from 'express'
import router from 'src/controllers/index'

const port: number = parseInt(<string>process.env.PORT, 10) || 8081 
const app: express.Application = express()

app.use((_: express.Request,res: express.Response, next: express.NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", <string>process.env.BASE_URL_UI)
  next()
})

app.use('/api/v1',router)

app.listen(port, () => console.log(`The app listens on port ${port}`))