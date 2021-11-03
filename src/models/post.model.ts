import { model, Schema } from 'mongoose';
const postSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  note: {
    type: String
  },
  image: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date
  },
  updatedBy: {
    type: String
  },
  updatedAt: {
    type: Date
  }

})

class Post {
  name: String;
  note: String;
  image: String;
  createdBy: String;
  createdAt: Date;
  updatedBy: String;
  updatedAt: Date
  constructor(name: string, note: string, image: string, createdBy: string, createdAt: Date, updatedBy: string, updatedAt: Date) {
    this.name = name,
      this.note = note,
      this.image = image,
      this.createdBy = createdBy,
      this.createdAt = createdAt,
      this.updatedBy = updatedBy,
      this.updatedAt = updatedAt
  }
}

const modelPost = postSchema.loadClass(Post);
export default model('modelPost', modelPost);