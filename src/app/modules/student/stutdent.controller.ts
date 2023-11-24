import { Request, Response } from 'express'
import { StudentServices } from './student.services'
import Joi from 'joi'

const createStudent = async (req: Request, res: Response) => {
  try {
    //creating a schema validation using joi
    const joiValidationSchema = Joi.object({
      id: Joi.string(),
      name: {
        firstName: Joi.string().max(20).required(),
        middleName: Joi.string().max(20),
        lastName: Joi.string().max(20).required(),
      },
      gender: Joi.string().required().validate(['Male', 'Female', 'Other']),
    })
    //client theke data niye aste hobe
    // const student = req.body
    // const student = req.body.student
    const { student: studentData } = req.body

    //will call service function to send data
    const result = await StudentServices.createStudentIntoDB(studentData)

    //console post data
    console.log(result)
    //send res
    res.status(200).send({
      success: true,
      message: 'Student created Successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Something went wrong',
      error: error,
    })
  }
}

//get all student
const getAllStudents = async (req: Request, res: Response) => {
  try {
    //1. call service
    const result = await StudentServices.getAllStudentsFromDB()
    // 2. res
    res.status(200).send({
      success: true,
      message: 'Students are retrieve successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
//get single students
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    // 1.get id using params
    const { studentId } = req.params
    //1. call service function using id
    // 2. const studentId = res.params.studentId
    const result = await StudentServices.getSingleStudentDB(studentId)
    // 3.res
    res.status(200).send({
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}
