export interface IQualification {
  id: string;
  name: string;
  datecompleted: string;
  imageurl: string;
}
export interface IUser {
  id: string;
  role_id: string;
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
  contact: string;
  dob: string;
  city: string;
  password: string;
  profileimageurl: string;
  idimageurl: string;
  isverified: boolean;
  specialization: string;
  availability: string;
  qualification: IQualification[];
  createdat: string;
  updatedAt: string;
}
