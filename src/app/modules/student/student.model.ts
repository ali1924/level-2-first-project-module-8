import { Schema, model, connect, STATES } from 'mongoose'
import { Student } from './student.interface'

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  email: { type: String, required: true },
  gender: ['Male', 'Female'], //enum same as union of ts
  dateOfBirth: String,
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String },
  bloodGroup: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardian: {
    fatherName: { type: String },
    fatherOccupation: { type: String },
    fatherContactNo: { type: String },
    motherName: { type: String },
    motherOccupation: { type: String },
    motherContactNo: { type: String },
  },
  localGuardian: {
    name: { type: String },
    occupation: { type: String },
    contactNo: { type: String },
  },
  isActive: ['active', 'blocked'],
})
