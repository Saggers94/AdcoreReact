import React, { useState } from "react";

const CreateComponent = () => {
  const [name, setName] = useState("");
  const [description, setDescirption] = useState("");
  const [parent, setParent] = useState(0);
  const [readOnly, setReadOnly] = useState(false);

  const handleInputReadOnlyChange = () => {
    setReadOnly(!readOnly);
  };

  return (
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header text-uppercase">
              <strong>Create Data</strong>
            </div>

            <div class="card-body">
              <form>
                <div class="form-group mb-2">
                  <label for="name">
                    <b>Name</b>
                  </label>
                  <input
                    id="name"
                    type="text"
                    class="form-control "
                    name="name"
                    value={name}
                    onChange={(newName) => setName(newName)}
                    required
                    autocomplete="name"
                    autofocus
                  />
                </div>

                <div class="form-group">
                  <label for="description">
                    <b>Description</b>
                  </label>
                  <textarea
                    id="description"
                    class="form-control"
                    name="description"
                    value={description}
                    onChange={(desc) => setDescirption(desc)}
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="parent">
                    <b>Parent</b>
                  </label>
                  <input
                    id="parent"
                    type="number"
                    class="form-control"
                    name="parent"
                    value={parent}
                    onChange={(newParent) => setParent(newParent)}
                    required
                  />
                </div>

                <div class="form-check mt-4">
                  <input
                    id="read_only"
                    className="form-check-input"
                    name="read_only"
                    type="checkbox"
                    checked={readOnly}
                    onChange={handleInputReadOnlyChange}
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    <b>Read Only</b>
                  </label>
                </div>

                <button type="submit" class="btn btn-primary mt-3">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateComponent;
