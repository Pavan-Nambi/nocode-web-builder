import React, { useState } from "react";

function Home() {
  const [pages, setPages] = useState([]);
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const onSave = () => {
    if (!name) {
      setIsValid(false);
      return;
    }
  };
  return (
    <div className="p-3 mb-2 bg-secondary text-white">
      <div className="col-12 mt-5">
        <form id="create-page" onsubmit="return validatForm(event)" novalidate>
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
              onclick="clearForm()"
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
                  <tr>
                    <td>{page._id}</td>
                    <td>{page.name}</td>
                    <td>{page.slug}</td>
                    <td>
                      <a href={`/api/editor/${this._id}`}>Edit</a>
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
