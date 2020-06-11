import * as express from 'express';
import { getTest, signup, login } from '../handlers/handlers'


const router = express.Router()

router.get('/test', getTest)
router.post("/signup", signup);
router.post("/login", login);

export default router
