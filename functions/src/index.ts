import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import testRoutes from './controller/routes/routes'
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const app = express()

app.use(cors())

app.use(testRoutes)

export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

exports.api = functions.https.onRequest(app);