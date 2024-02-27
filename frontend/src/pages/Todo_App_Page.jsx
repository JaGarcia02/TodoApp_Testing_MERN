import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Todo_App_Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [this_id, setThis_Id] = useState(0);
  const [this_id_delete, setThis_Id_Delete] = useState(0);
  const [taskData, setTaskData] = useState([]);
  const [toggle_update, setToggel_Update] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/task-api/get")
      .then((res) => {
        console.log(res.data);
        setTaskData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(toggle_update);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/task-api/getById/${this_id}`)
      .then((res) => {
        console.log(res);
        console.log(this_id);
        setInputValue(res.data.task);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [this_id]);

  useEffect(() => {
    axios
      .delete(`http://localhost:8080/task-api/delete-task/${this_id_delete}`)
      .then((res) => {
        setTaskData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [this_id_delete]);

  return (
    <div>
      <h1>Hello</h1>

      {/* Content */}
      <form
        action=""
        onSubmit={(e) => {
          axios
            .post("http://localhost:8080/task-api/create-task", {
              task_name: inputValue,
            })
            .then((res) => {
              console.log(res.data);
              setTaskData(res.data);
              setInputValue("");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <div>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
            required
          />
          {toggle_update === true ? (
            <button
              type="button"
              onClick={() => {
                axios
                  .put(
                    `http://localhost:8080/task-api/update-task/${this_id}`,
                    {
                      task_name: inputValue,
                    }
                  )
                  .then((res) => {
                    console.log(res.data);
                    setTaskData(res.data);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              Update Task
            </button>
          ) : (
            <button type="submit">Add Task</button>
          )}

          <button
            type="button"
            onClick={() => {
              setInputValue("");
              setToggel_Update(false);
              setThis_Id(0);
            }}
          >
            X
          </button>
        </div>
      </form>

      {/* Table Data */}
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {taskData.map((data, index) => {
            return (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.task}</td>
                  <td>
                    <div>
                      <button
                        onClick={() => {
                          setThis_Id(data.id);
                          setToggel_Update(true);
                        }}
                      >
                        View
                      </button>
                      <button
                        onClick={() => {
                          setThis_Id_Delete(data.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todo_App_Page;
