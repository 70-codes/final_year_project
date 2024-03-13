import React from "react";
import { Container } from "@mui/material";
import FileUpload from "../components/FileUpload";

const Home = () => {
  return (
    <Container>
      <div className="mt-11">
        <div className="mt-11">Home</div>
        <div>
          <FileUpload />
        </div>
      </div>
    </Container>
  );
};

export default Home;
