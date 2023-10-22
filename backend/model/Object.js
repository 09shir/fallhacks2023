class RetroBoard {
    constructor(retroBoardId, columnList) {
        this.retroBoardId = retroBoardId;
        this.columnList = columnList;
    }
}

class Column {
    constructor(columnId, columnName, taskList) {
        this.columnId = columnId;
        this.columnName = columnName;
        this.taskList = taskList;
    }
}

class Task {
    constructor(taskId, content, thumbCount, commentList) {
        this.taskId = taskId;
        this.content = content;
        this.thumbCount = thumbCount;
        this.commentList = commentList;
    }
}

class Comment {
    constructor(commentId, content) {
        this.commentId = commentId;
        this.content = content;
    }
}

module.exports = {
    RetroBoard: RetroBoard,
    Column: Column,
    Task: Task,
    Comment: Comment
}