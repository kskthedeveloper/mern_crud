const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Create
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
       const post = await newPost.save();
        if(!post) throw Error('Something went wrong with the post')
        res.status(200).json(post);
    } catch(error) {
        res.status(400).json({msg: error})
    }
});

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        if(!posts) throw Error('No Items');
        res.status(200).json(posts);
    } catch(error) {
        res.status(400).json({msg: error})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const post = await  Post.findById(req.params.id);
        if(!post) throw Error('No Items');
    } catch (err) {
        res.status(400).json({msg: err})
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const post = await  Post.findByIdAndUpdate(req.params.id, req.body);
        if(!post) throw Error('Something went wrong while updating the post');
        res.status(200).json({success: true,post:post});
    } catch (err) {
        res.status(400).json({msg: err})
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if(!post) throw Error('No post found!');
        res.status(200).json({success: true})
    }catch(err) {
        res.status(400).json({msg: error})
    }
});

module.exports = router;
