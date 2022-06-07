import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, new_page } from "./API";
import { Link } from "react-router-dom";
function Home() {
  const [pages, setPages] = useState([]);
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");

  const onSave = async () => {
    if (!name) {
      setIsValid(false);
      return;
    }
    const newPage = await new_page(name);
    setName("");
    setPages([...pages, newPage]);
  };
  useEffect(() => {
    async function getEveryPageFromAPI() {
      try {
        const response = await axios.get(API_URL);
        setPages(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error is =>>", error);
        setError(error.message);
      }
    }
    getEveryPageFromAPI();
  }, []);

  return (
    <div className="p-3 mb-2 bg-secondary text-white">
      <div className="col-12 mt-5">
        <form id="create-page" noValidate>
          <h5>
            Create Page (you can just type name of page below and click save)
          </h5>

          <div>
            <input
              type="text"
              className={`form-control form-control-sm ${
                isValid ? "" : "is-invalid"
              }`}
              id="name"
              name="name"
              placeholder="Name of Page"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {!isValid && (
              <div className="invalid-feedback">
                Please provide a valid name.
              </div>
            )}
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn  btn-sm"
              data-bs-dismiss="modal"
            >
              Clear
            </button>
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={onSave}
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="col-12 my-2">
        {error && (
          <div role="alert" className="alert alert-primary">
            {error}
          </div>
        )}
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Slug</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {pages
              ? pages.map((page) => (
                  <tr key={page._id}>
                    <td>{page._id}</td>
                    <td>{page.name}</td>
                    <td>{page.slug}</td>
                    <td>
                      <Link to={`/editor/${page._id}`}>Edit</Link>
                      {console.log("page id is", page._id)}
                    </td>
                  </tr>
                ))
              : "No page"}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
