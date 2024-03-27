import React from "react";
import { Container } from "@mui/material";
import FileUpload from "../components/FileUpload";

const Home = () => {
  return (
    <Container>
      <div className="mt-11">
        <div className="mt-11">Upload the dataset for training and results</div>
        <div>
          <FileUpload />  
        </div>
      </div>
    </Container>
  );
};

export default Home;
