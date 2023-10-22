CREATE TABLE RetroBoard
(
    board_id INTEGER AUTO_INCREMENT,
    title VARCHAR(256),
    PRIMARY KEY (board_id)
);

CREATE TABLE Column
(
    column_id INTEGER AUTO_INCREMENT,
    column_name VARCHAR(256),
    PRIMARY KEY (column_id)
);

CREATE TABLE Task
(
    task_id INTEGER AUTO_INCREMENT,
    board_id INTEGER,
    column_id INTEGER,
    content VARCHAR(256),
    thumb_number INTEGER,
    PRIMARY KEY (task_id)
);

CREATE TABLE Comment
(
    comment_id INTEGER AUTO_INCREMENT,
    task_id INTEGER,
    content VARCHAR(256),
    PRIMARY KEY (comment_id)
);


