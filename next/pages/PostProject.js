import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function PostProject() {
  const [title, setTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [webLink, setWebLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/posts/read").then((res) => {
      setProjectList(res.data);
    });
  }, []);

  const deleteProject = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`, {});
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const addProject = () => {
    Axios.post("http://localhost:3001/api/post/post", {
      title: title,
      projectDescription: projectDescription,
      imageLink: imageLink,
      webLink: webLink,
      githubLink: githubLink,
    });
  };

  return (
    <div className="PostProject">
      <form className="project-form">
        <label>Project Title</label>
        <input
          placeholder="Title"
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Project Description</label>
        <textarea
          placeholder="Description"
          type="text"
          onChange={(e) => {
            setProjectDescription(e.target.value);
          }}
        />
        <label>Image Link</label>
        <input
          placeholder="Image"
          type="text"
          onChange={(e) => {
            setImageLink(e.target.value);
          }}
        />
        <label>Website Link</label>
        <input
          placeholder="Website"
          type="text"
          onChange={(e) => {
            setWebLink(e.target.value);
          }}
        />
        <label>Project github link</label>
        <input
          placeholder="Github"
          type="text"
          onChange={(e) => {
            setGithubLink(e.target.value);
          }}
        />
        <button onClick={addProject} className="cybr-btn contact-btn">
          Submit_Project
          <span aria-hidden id="glitch" className="cybr-btn__glitch">
            //Submit//Project//
          </span>
          <span aria-hidden id="tag" className="cybr-btn__tag">
            ED5
          </span>
        </button>
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
      </form>
    </div>
  );
}
