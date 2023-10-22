const express = require('express')
const router = express.Router()
var { RetroBoard, Column, Task, Comment } = require("../model/Object.js")
var { getAllBoard, addTask, deleteTask, addThumbUp, deductThumbUp, addComment, deleteComment } = require("../service/retroBoardService.js")

// Test object
let comment = new Comment(1, "yeah");
let task = new Task(1, "something good", 0, new Array(comment));
let column = new Column(1, "Went Well", new Array(task));
// let board = new RetroBoard(1, new Array(column));

// define the home page route
router.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// Get all board information
router.get('/:retroboard_id', (req, res) => {
//   let board = new RetroBoard(1, new Array(column));
  let retroboard_id = req.params.retroboard_id;
  res.json(getAllBoard(retroboard_id))

})
// Add task to board
router.post('/:retroboard_id/:column_id', (req, res) => {
    let retroboard_id = req.params.retroboard_id;
    let column_id = req.params.column_id;
    let content = req.body.content;
    addTask(retroboard_id, content, column_id);
    res.send('OK');
})

// Delete task from board
router.delete('/tasks/:task_id', (req, res) => {
    let task_id = req.params.task_id;
    deleteTask(task_id);
    res.status(204).send();
})

// Add thumb up
router.put('/tasks/:task_id/add_thumbup', (req, res) => {
    let task_id = req.params.task_id;
    addThumbUp(task_id);
    res.send('OK')
})

// Remove thumb up
router.put('/tasks/:task_id/remove_thumbup', (req, res) => {
    let task_id = req.params.task_id;
    deductThumbUp(task_id);
    res.send('OK')
})

// Post comment
router.post('/:retroboard_id/:task_id/comment', (req, res) => {
    let retroboard_id = req.params.retroboard_id;
    let task_id = req.params.task_id;
    addComment(retroboard_id, task_id);
    res.send('OK')
})

// Delete comment
router.delete('/comment/:comment_id', (req, res) => {
    let comment_id = req.params.comment_id;
    deleteComment(comment_id);
    res.status(204).send();
})

module.exports = router