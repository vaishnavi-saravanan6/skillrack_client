import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import CheckIcon from '@mui/icons-material/Check';
import './css/TodoList.css';

const TodoList = ({ adminView = false }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.token;

  const [todo, setTodo] = useState('');
  const [status, setStatus] = useState(false);
  const [todoArray, setTodoArray] = useState([]);

  // 🔹 FETCH TODOS
  const getTodo = async () => {
    try {
      const url = "http://localhost:5000/todo/gettodo";
      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (adminView) {
        setTodoArray(res.data); // all todos
      } else {
        // filter only user todos
        setTodoArray(res.data.filter(t => t.userId === user._id));
      }
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  // 🔹 ADD TODO
  const postTodo = async () => {
    try {
      await axios.post(
        "http://localhost:5000/todo/addtodo",
        { todo },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTodo('');
      setStatus(true);
      getTodo();
      setTimeout(() => setStatus(false), 3000);
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  // 🔹 DELETE TODO
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todo/deletetodo/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      getTodo();
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  // 🔹 UPDATE TODO
  const newTodo = (id, data) => {
    const newdata = prompt("Enter new Data:", data);
    if (!newdata || newdata.trim() === '') {
      alert("Todo cannot be empty");
      return;
    }
    updateTodo(id, newdata);
  };

  const updateTodo = async (id, data) => {
    try {
      await axios.put(
        `http://localhost:5000/todo/updatetodo/${id}`,
        { todo: data },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      getTodo();
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };
 const completeTodo = async (id) => {
  try {
    await axios.put(
      `http://localhost:5000/todo/complete/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    getTodo();
  } catch (err) {
    console.error(err);
  }
};


  // 🔹 INITIAL FETCH
  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="todo-container">
      <Typography variant="h1" gutterBottom>Todo</Typography>

      <Box sx={{ width: 700, maxWidth: '100%' }} className="todo-input">
        <TextField
          fullWidth
          label="Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button variant="contained" onClick={postTodo}>
          Add todo
        </Button>
      </Box>

      {status && (
        <div style={{ position: 'fixed', top: "20px", right: "20px", zIndex: 9999 }}>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Todo has been added successfully!
          </Alert>
        </div>
      )}

      <ul>
  {todoArray.map((todo) => (
    <li key={todo._id} className="list">
      <h3
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "#9ca3af" : "#111827",
        }}
      >
        {todo.todo}
      </h3>

      <div className="space">
        {/* 🗑️ DELETE */}
        <button
          className="d"
          onClick={() => deleteTodo(todo._id)}
          title="Delete todo"
        >
          <MdDelete size={20} />
        </button>

        {/* ✅ COMPLETE */}
        {!todo.completed && (
          <button
            className="c"
            onClick={() => completeTodo(todo._id)}
            title="Mark as completed"
          >
            ✅
          </button>
        )}
      </div>
    </li>
  ))}
</ul>


    </div>
  );
};

export default TodoList;
