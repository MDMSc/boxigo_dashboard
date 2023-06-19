import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import SingleMove from "./SingleMove";
import { CircularProgress } from "@mui/joy";

export default function MyMoves() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("http://test.api.boxigo.in/sample-data/")
      .then((response) => response.json())
      .then((data) => {
        setData([...data.Customer_Estimate_Flow]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h6" fontSize="1.5rem" fontWeight="700" mb={4}>
        My Moves
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: 0,
        }}
      >
        {loading ? (
          <CircularProgress color="danger" size="lg" variant="soft" />
        ) : (
          <>
            {data !== null &&
              data.length &&
              data.map((val, index) => {
                return <SingleMove key={index} data={val} />;
              })
            }
          </>
        )}
      </div>
    </div>
  );
}
