import { Schema, model } from 'mongoose'
import { Guardian, LocalGuardian, Student, UserName } from './student.interface'
const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
})
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String },
  occupation: { type: String },
  contactNo: { type: String },
})

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: true,
  },
  email: { type: String, required: [true, 'Email  is required'], unique: true },
  //   gender: ['Male', 'Female'], //enum same as union of ts
  gender: {
    type: String,
    enum: {
      values: ['Male', 'Female', 'Other'],
      // message:"This gender field only the following:'Male','Female' or 'Other' "
      message: '{VALUE} is not valid',
    },
    required: true,
  }, //enum same as union of ts
  dateOfBirth: String,
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
  },
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    // required:true
    default: 'active',
  },
})

// 3. Create a Model.
// const modelName=model<Type>("modelName",schema)
export const StudentModel = model<Student>('Student', studentSchema)
