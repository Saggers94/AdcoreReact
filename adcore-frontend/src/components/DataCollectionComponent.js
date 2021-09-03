import React, { useState } from "react";
import useFetch from "../customHooks/useFetch";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

const url = "http://localhost:9090/adcore/api/data";

const DataCollectionComponent = () => {
  const { dataCollection } = useFetch(url);

  // console.log(dataCollection);
  const headers = [
    { label: "ID", key: "data_id" },
    { label: "Name", key: "name" },
    { label: "Description", key: "description" },
    { label: "Parent", key: "parent" },
    { label: "Read-Only", key: "read_only" },
    { label: "Created", key: "created" },
    { label: "Updated", key: "updated" },
  ];

  const csvReport = {
    filename: "Data-Collection-From-Adcore.csv",
    headers: headers,
    data: dataCollection,
  };

  return (
    <div class="container">
      <h1 class="mt-4">
        Data Collection From Adcore{" "}
        <button class="btn btn-success">
          <CSVLink {...csvReport}>Export To CSV</CSVLink>
        </button>
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
            {/* <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={`/images/${spacecraft.spacecraft_image}`}
              alt={spacecraft.spacecraft_name}
            />
          </div> */}

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
                  Detailed Information
                </Link>
                <Link class="btn btn-primary" to={`/update/${data.data_id}`}>
                  Update Information
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
