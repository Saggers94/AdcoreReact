import React from "react";
import useFetch from "../customHooks/useFetch";
import { Link } from "react-router-dom";

const url = "http://localhost:9090/adcore/api/data";

const DataCollectionComponent = () => {
  const { dataCollection } = useFetch(url);

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
            <div class="col-lg-5">
              <h2 class="font-weight-light">{data.name}</h2>
              <p>
                <strong>Description: </strong>
                {data.description}
              </p>
              <div class="col">
                <Link
                  class="btn btn-primary"
                  style={{ marginRight: "5px" }}
                  to={`/data/${data.data_id}`}
                >
                  Node Detail
                </Link>
                <Link
                  class="btn btn-secondary"
                  style={{ marginRight: "5px" }}
                  to={`/update/${data.data_id}`}
                >
                  Update Node
                </Link>
                <Link class="btn btn-info" to={`/add`}>
                  Add Node
                </Link>
              </div>
            </div>
          </div>
        ))}

      <hr />
    </div>
  );
};

export default DataCollectionComponent;
