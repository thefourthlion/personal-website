import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./PostProject.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
export default function PostProject() {
  const [title, setTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [webLink, setWebLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [projectList, setProjectList] = useState([]);

  const refreshPage = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    Axios.get("https://api.everettdeleon.com/api/posts/read").then((res) => {
      setProjectList(res.data);
    });
  }, []);

  const deleteProject = (id) => {
    Axios.delete(
      `https://api.everettdeleon.com/api/posts/delete/${id}`,
      {}
    ).then(refreshPage());
  };

  const addProject = () => {
    Axios.post("https://api.everettdeleon.com/api/posts/create", {
      title: title,
      projectDescription: projectDescription,
      imageLink: imageLink,
      webLink: webLink,
      githubLink: githubLink,
    }).then(refreshPage());
  };

  return (
    <div className="PostProject">
      <div className="container">
        <h1>Add New Project To Collection</h1>
        <FloatingLabel className="form-label" label="Project Title">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Project Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </FloatingLabel>

        <textarea
          placeholder="Project Description"
          type="text"
          onChange={(e) => {
            setProjectDescription(e.target.value);
          }}
        />
        <FloatingLabel className="form-label" label="Image Link">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Image Link"
            onChange={(e) => {
              setImageLink(e.target.value);
            }}
          />
        </FloatingLabel>

        <FloatingLabel className="form-label" label="Web Link">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Web Link"
            onChange={(e) => {
              setWebLink(e.target.value);
            }}
          />
        </FloatingLabel>
        <FloatingLabel className="form-label" label="Github Link">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Github Link"
            onChange={(e) => {
              setGithubLink(e.target.value);
            }}
          />
        </FloatingLabel>

        <div className="cyber-btn-container">
          <button onClick={addProject} className="cybr-btn contact-btn">
            Submit_Project
            <span aria-hidden id="glitch" className="cybr-btn__glitch">
              //Submit//Project//
            </span>
            <span aria-hidden id="tag" className="cybr-btn__tag">
              ED5
            </span>
          </button>
        </div>
        {projectList.map((val, key) => {
          return (
            <div key={val._id} className="">
              <h3>
                {val.title + " "}
                <span>
                  <button
                    onClick={() => {
                      deleteProject(val._id);
                    }}
                    className="delete-btn"
                  >
                    🚫
                  </button>
                </span>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
