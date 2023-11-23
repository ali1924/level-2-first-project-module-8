import express from 'express'
import { StudentControllers } from './stutdent.controller'
const router = express.Router()

// post for create student
//will call controller function
router.post('/create-student', StudentControllers.createStudent)

export const StudentRoutes=router;
