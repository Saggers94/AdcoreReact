import React, { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [spacecrafts, setSpacecrafts] = useState([]);

  const getSpacecrafts = useCallback(async () => {
    const response = await fetch(url);
    const spacecrafts = await response.json();

    setSpacecrafts(spacecrafts);
  }, [url]);

  useEffect(() => {
    getSpacecrafts();
  }, [url]);

  return { spacecrafts };
};

export default useFetch;
