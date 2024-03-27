// Import necessary dependencies
import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import { Container, Typography } from "@mui/material";

// Define the ChartComponent
const ChartComponent = () => {
  const [data, setData] = useState([]);
  const [chartKey, setChartKey] = useState({ line: 0, bar: 0 });

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://0.0.0.0:8000/mlmodels/visualization"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [setData]);

  const regenerateCharts = useCallback(() => {
    setChartKey((prevState) => ({
      line: prevState.line + 1,
      bar: prevState.bar + 1,
    }));
  }, [setChartKey]);

  const attributesLabels = useMemo(() => {
    return data.map((entry) => entry.QUARTER);
  }, [data]);

  const attribute1Data = useMemo(() => {
    return data.map((entry) => entry.A1);
  }, [data]);

  const attribute2Data = useMemo(() => {
    return data.map((entry) => entry.A2);
  }, [data]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Destroy and recreate the charts on every rerender
  const containerStyles = { position: "relative" };

  return (
    <Container style={containerStyles} maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        Visualization 1: Line Chart
      </Typography>
      <div style={{ height: "400px" }}>
        <Line
          key={`line-chart-${chartKey.line}`}
          data={{
            xAxisID: "x",
            labels: attributesLabels,
            datasets: [
              {
                label: "Attribute 1",
                data: attribute1Data,
                fill: false,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
              },
            ],
          }}
        />
      </div>
      <Typography variant="h2" gutterBottom>
        Visualization 2: Bar Chart
      </Typography>
      <div style={{ height: "400px" }}>
        <Bar
          key={`bar-chart-${chartKey.bar}`}
          data={{
            xAxisID: "x",
            labels: attributesLabels,
            datasets: [
              {
                label: "Attribute 2",
                data: attribute2Data,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
      <button onClick={regenerateCharts}>Regenerate Charts</button>
    </Container>
  );
};

// Export the ChartComponent
export default ChartComponent;
