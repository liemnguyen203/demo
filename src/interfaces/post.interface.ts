export interface ICreatePost {
  name: string,
  note: string,
  image: string,
  createdBy: string,
  createdAt: Date
}
export interface IUpdatePost {
  name: string,
  note: string,
  image: string,
  updatedBy: string,
  updatedAt: Date
}