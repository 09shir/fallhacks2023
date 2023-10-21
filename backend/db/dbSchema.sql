CREATE TABLE RetroBoard
(
    board_id INT AUTO_INCREMENT,
    title VARCHAR(256),
    PRIMARY KEY (board_id)
);

CREATE TABLE Column
(
    column_id INT AUTO_INCREMENT,
    column_name VARCHAR(256),
    PRIMARY KEY (column_id)
);

CREATE TABLE Task
(
    task_id INT AUTO_INCREMENT,
    board_id INT,
    column_id INT,
    content VARCHAR(256),
    thumb_number INT,
    timestamp TIMESTAMP(), 
    PRIMARY KEY (task_id,  board_id, column_id),
    FOREIGN KEY (board_id) REFERENCES RetroBoard(board_id),
    FOREIGN KEY (column_id) REFERENCES Column(column_id)
);

CREATE TABLE SubComment
(
    comment_id INT AUTO_INCREMENT,
    task_id INT,
    content VARCHAR(256),
    timestamp TIMESTAMP(), 
    PRIMARY KEY (comment_id, task_id),
    FOREIGN KEY (task_id) REFERENCES Task(task_id), ON DELETE CASCADE
);


