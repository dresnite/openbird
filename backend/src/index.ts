import app from './app.ts'
import { PORT } from './utils/config.ts'

app.listen(PORT, () => {
    console.log(`OpenBird backend running on port ${PORT}`)
})