import express from 'express';
import postController from '../controllers/post.controller';
const router = express.Router();

/* GET home page. */
router.post('/', postController.create);
router.put('/:id', postController.update);
router.get('/', postController.findAll);
router.get('/:id', postController.findById);
router.delete('/:id', postController.delete);
export default router;
