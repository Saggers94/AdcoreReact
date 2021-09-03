import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:9090/adcore/api/";

const DataCollectionComponent = () => {
  const [dataCollection, setDataCollection] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetch(baseUrl + "data")
      .then((res) => res.json())
      .then((data) => setDataCollection(data))
      .catch((err) => console.log(err));
  }, [deleted]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`${baseUrl}/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => setDeleted(true))
        .catch((err) => console.log(err));
    }
    setDeleted(false);
  };

  return (
    <div class="container">
      <h1 class="mt-4">
        Data Collection From Adcore{" "}
        <a href="http://localhost:9090/adcore/api/export-csv">Download CSV</a>
      </h1>
      <hr />
      {dataCollection &&
        dataCollection.map((data) => (
          <div
            class="row align-items-center"
            key={data.data_id}
            id="data"
            style={
              data.data_id == dataCollection.length
                ? { marginBottom: "150px" }
                : {}
            }
          >
            <div class="col-lg-12">
              <h2 class="font-weight-light">{data.name}</h2>
              <p>
                <strong>Description: </strong>
                {data.description}
              </p>
              <div class="col">
                <Link
                  class="btn btn-info"
                  style={{ marginRight: "5px" }}
                  to={`/data/${data.data_id}`}
                >
                  Node Detail
                </Link>
                <Link
                  class="btn btn-success"
                  style={{ marginRight: "5px" }}
                  to={`/add`}
                >
                  Add Node
                </Link>
                <Link
                  class="btn btn-secondary"
                  style={{ marginRight: "5px" }}
                  to={`/update/${data.data_id}`}
                >
                  Update Node
                </Link>

                <button
                  class="btn btn-danger"
                  onClick={() => handleDelete(data.data_id)}
                >
                  Delete Node
                </button>
              </div>
            </div>
          </div>
        ))}

      <hr />
    </div>
  );
};

export default DataCollectionComponent;
