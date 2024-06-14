import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getAllPosts(req, res) {
    const posts = await prisma.post.findMany({
        include: { comments: true }
    });
    res.json(posts);
}

async function createPost(req, res) {
    const { title, content } = req.body;
    const post = await prisma.post.create({
        data: { title, content }
    });
    res.json(post);
}

export { getAllPosts, createPost };