import { ICreatePost, IUpdatePost } from '../interfaces/post.interface';
import modelPost from '../models/post.model';

class PostService {
  async create(params: ICreatePost) {
    return await modelPost.create(params);
  }
  async update(id: string, params: IUpdatePost) {
    return await modelPost.findByIdAndUpdate({ _id: id }, params);
  }
  async findAll() {
    return await modelPost.find({});
  }
  async findById(id: string) {
    return await modelPost.findById({ _id: id });
  }
  async delete(id: string) {
    return await modelPost.findByIdAndDelete({ _id: id });
  }
}

export default new PostService;