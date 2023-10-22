var db = require("../db/sqlite3.js");
var {RetroBoard, Column, Task, Comment} = require("../model/Object.js")

let getComments = (task_id) => {
    let sql = "SELECT comment_id, task_id, content, timestamp FROM Comment WHERE task_id = ?;";
    const comments = db.prepare(sql).all(task_id);
    let commentList = comments.forEach(element => {
        return new Comment(element.comment_id, element.content);
    });
    return commentList;
}

let getTasks = (board_id, column_id) => {
    let sql = "SELECT task_id, board_id, column_id, content, thumb_number FROM Task WHERE board_id = ? AND column_id = ?;";
    const tasks = db.prepare(sql).all(board_id, column_id);
    let taskList = tasks.forEach(element => {
        return new Task(element.task_id, element.content, element.thumb_number, getComments(element.task_id));
    });
    return taskList;
}

let getColumns = (board_id) => {
    let sql = "SELECT column_id, column_name FROM Column;"
    const columns = db.prepare(sql).all();
    let columnList = columns.forEach(element => {
        return new Column(element.column_id, element.column_name, getTasks(board_id, element.column_id));
    });
    return columnList;
}

let getAllBoard = (board_id) => {
    let sql = "SELECT board_id, title FROM RetroBoard WHERE board_id = ?";
    const board = db.prepare(sql).all(board_id);
    console.log("Board = " + board);
    return new RetroBoard(board.board_id, getColumns(board.board_id));
}

let addTask = (board_id, content, column_id) => {
    let sql = "INSERT INTO Tasks (board_id, content, thumb_number, column_id) VALUES (?, ?, 0, ?)";
    db.prepare(sql).run(board_id, content, column_id);
}

let deleteTask = (task_id) => {
    let sql1 = "DELETE FROM Comment WHERE task_id = ?";
    let sql2 = "DELETE FROM Task WHERE task_id = ?";
    db.prepare(sql1).run(task_id);
    db.prepare(sql2).run(task_id);
}

let addThumbUp = (task_id) => {
    let sql = "UPDATE Task SET thumb_number = thumb_number + 1 WHERE task_id = ?";
    db.prepare(sql).run(task_id);;
}

let deductThumbUp = (task_id) => {
    let sql = "UPDATE Task SET thumb_number = CASE WHEN thumb_number > 0 THEN thumb_number - 1 ELSE 0 END WHERE task_id = ?";
    db.prepare(sql).run(task_id);
}

let addComment = (task_id, content) => {
    let sql = "INSERT INTO Comment (task_id, content) VALUES (?, ?)";
    db.prepare(sql).run(task_id, content);
}

let deleteComment = (comment_id) => {
    let sql = "DELETE FROM Comment WHERE comment_id = ?";
    db.prepare(sql).run(comment_id);
}

module.exports = {
    getComments: getComments,
    getTasks: getTasks,
    getAllBoard: getAllBoard,
    addTask: addTask,
    deleteTask: deleteTask,
    addThumbUp: addThumbUp,
    deductThumbUp: deductThumbUp,
    addComment: addComment,
    deleteComment: deleteComment
}