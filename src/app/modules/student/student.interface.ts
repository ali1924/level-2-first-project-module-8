import { Schema, model, connect } from 'mongoose'
import { type } from 'os'
type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}
type BloodGroup='A-' | 'A+' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
export type Student = {
  id: string
  name: {
    firstName: string
    middleName: string
    lastName: string
  }
  email: string
  gender: 'Male' | 'Female'
  dateOfBirth: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: BloodGroup
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
}
