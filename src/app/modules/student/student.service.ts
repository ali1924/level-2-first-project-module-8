import { Student } from './student.interface'
import { StudentModel } from './student.model'

const createStudentIntoDB = async (student: Student) => {
  //query chalate hobe model er upor
  const result = await StudentModel.create(student)
  return result
}

export const StudentServices = {
  createStudentIntoDB,
}
