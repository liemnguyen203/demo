import { Request, Response } from 'express';
import postService from "../services/post.service";
import { ICreatePost, IUpdatePost } from '../interfaces/post.interface';
class PostController {
  async create(req: Request, res: Response) {
    const body = req.body;
    const params: ICreatePost = {
      name: body.name,
      note: body.note,
      image: body.image,
      createdBy: body.createdBy,
      createdAt: new Date()

    }
    try {
      const postData = await postService.create(params);
      res.status(201).json(postData);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req: Request, res: Response){
    const body = req.body;
    const id = req.params.id;
    const params: IUpdatePost = {
      name: body.name,
      note: body.note,
      image: body.image,
      updatedBy: body.updatedBy,
      updatedAt: new Date()
    }
    try {
      const postData = await postService.update(id,params);
      res.status(200).json(postData);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async findAll(req: Request, res: Response){
    try {
      const postData = await postService.findAll();
      res.status(200).json(postData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async findById(req: Request, res: Response){
    const id= req.params.id;
    try {
      const postData = await postService.findById(id);
      res.status(200).json(postData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async delete(req: Request, res: Response){
    const id= req.params.id;
    try {
      const postData = await postService.delete(id);
      res.status(200).json(postData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
export default new PostController;