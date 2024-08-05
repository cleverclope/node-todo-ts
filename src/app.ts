import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)

const uri: string = `mongodb+srv://vowfortech:12345678*@cluster0.sl5n5bs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`



// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
// mongoose.set("useFindAndModify", false)

mongoose.set('strictQuery', true); // or `false` depending on your preference


mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })