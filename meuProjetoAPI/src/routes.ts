import express from 'express';
import * as PostController from './controllers/PostController';

const router = express.Router();

router.get('/posts', PostController.getAllPosts);
router.post('/posts', PostController.createPost);

export default router;