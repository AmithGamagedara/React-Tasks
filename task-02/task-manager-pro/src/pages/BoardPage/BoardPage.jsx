import "./BoardPage.scss";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Button, Spin, Divider, Typography } from "antd";
import useBoardApi from "../../hooks/useBoardApi";
// import { boards } from "../../helper/boards";

const { Title, Paragraph } = Typography;

function BoardPage() {
  const { id } = useParams();
  // const board = boards.find((b) => b.id === id);

  // const [boardState, setBoardState] = useState(board);
  const {
    board,
    lists,
    tasks,
    loading,
    insertTask,
    updateTaskList,
    deleteTaskList,
  } = useBoardApi(id);

  if (loading) return <Spin />;

  //insert
  const handleAddTask = (listId) => {
    const title = prompt("Enter task title:");
    if (!title) return;

    const description = prompt("Enter task description:");
    if (!description) return;

    insertTask(listId, { title, description });
  };

  //update
  const handleEditTask = (listId, task) => {
    const newTitle = prompt("Enter new title", task.title);
    if (!newTitle) return;

    const newDescription = prompt("Enter new description", task.description);
    if (!newDescription) return;

    updateTaskList(listId, task.id, {
      ...task,
      title: newTitle,
      description: newDescription,
    });
  };

  //delete
  const handleDeleteTask = (listId, taskId) => {
    deleteTaskList(listId, taskId);
  };

  return (
    <div className="board-page">
      <Title className="board-title">{board ? board.name : "Board not found"}</Title>
      <Paragraph className="board-description">{board?.description}</Paragraph>
      <Divider />
      <Row gutter={16}>
        {lists.map((list) => (
          <Col xs={24} sm={12} md={6} key={list.id}>
            <Card
              title={<span className="list-title">{list.title}</span>}
              // style={{
              //   minHeight: "180px",
              //   backgroundColor: "#f8f8f8",
              //   marginBottom: "24px",
              // }}
              className="list-card"
              variant="borderless"
            >
              {tasks[list.id]?.map((task) => (
                <Card
                  key={task.id}
                  size="small"
                  // style={{
                  //   marginBottom: "8px",
                  //   border: "1px solid #ebebeb",
                  // }}
                  className="task-card"
                  extra={
                    <div className="task-actions">
                      <Button
                        onClick={() => handleEditTask(list.id, task)}
                        color="primary"
                        variant="filled"
                        size="small"
                      >
                        edit
                      </Button>
                      {/* <a onClick={() => handleEditTask(list.id, task.id)}>
                        edit
                      </a> */}
                      <Button
                        onClick={() => handleDeleteTask(list.id, task.id)}
                        color="danger"
                        variant="filled"
                        size="small"
                        style={{ marginLeft: "6px" }}
                      >
                        delete
                      </Button>
                      {/* <a onClick={() => handleDeleteTask(list.id, task.id)}>
                        delete
                      </a> */}
                    </div>
                  }
                >
                  <div className="task-title"> {task.title}</div>
                  <div className="task-desc ">{task.description}</div>
                </Card>
              ))}

              <Button
                type="dashed"
                onClick={() => handleAddTask(list.id)}
                className="add-task-btn"
              >
                + Add Task
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BoardPage;
