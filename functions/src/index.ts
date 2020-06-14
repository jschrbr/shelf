import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import testRoutes from './controller/routes/routes'


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const app = express()

app.use(cors())

app.use(testRoutes)

exports.api = functions.https.onRequest(app);