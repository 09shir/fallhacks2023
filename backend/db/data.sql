INSERT INTO RetroBoard (board_id, title) VALUES (1, 'Retro Board');

INSERT INTO Column (column_id, column_name) VALUES (1, 'Well Done');
INSERT INTO Column (column_id, column_name) VALUES (2, 'To Improve');
INSERT INTO Column (column_id, column_name) VALUES (3, 'Action');

INSERT INTO Task (task_id, board_id, column_id, content, thumb_number) VALUES (1, 1, 1, 'Test 1', 0);
INSERT INTO Task (task_id, board_id, column_id, content, thumb_number) VALUES (2, 1, 2, 'Test 2', 0);
INSERT INTO Task (task_id, board_id, column_id, content, thumb_number) VALUES (3, 1, 3, 'Test 3', 0);