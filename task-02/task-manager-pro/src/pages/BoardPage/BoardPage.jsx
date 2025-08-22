import "./BoardPage.scss";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Button, Spin, Divider, Typography } from "antd";
import useBoardApi from "../../hooks/useBoardApi";
import { useFavorites } from "../../context/useFavorites";
import TaskList from "../../components/Tasks/TaskList";
// import { boards } from "../../helper/boards";

const { Title, Paragraph } = Typography;

function BoardPage() {
  const { id } = useParams();
  // const board = boards.find((b) => b.id === id);
  const { favorites, toggleFavorite } = useFavorites();

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
      <Title className="board-title">
        {board ? board.name : "Board not found"}
      </Title>
      <Paragraph className="board-description">{board?.description}</Paragraph>
      <Divider />
      <Row gutter={16}>
        {lists.map((list) => (
          <Col xs={24} sm={12} md={6} key={list.id}>
            <TaskList
              list={list}
              tasks={tasks}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              onAdd={handleAddTask}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BoardPage;
