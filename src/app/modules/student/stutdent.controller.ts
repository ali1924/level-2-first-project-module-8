import { Request, Response } from 'express'
import { StudentServices } from './student.service'
const createStudent = async (req: Request, res: Response) => {
  try {
    //client theke data niye aste hobe
    const student = req.body

    //will call service function to send data
    const result = await StudentServices.createStudentIntoDB(student)

    //send res
    res.status(200).send({
      success: true,
      message: 'Student created Successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const StudentControllers = {
  createStudent,
}
