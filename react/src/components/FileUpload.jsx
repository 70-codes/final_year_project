import React, { useState } from "react";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";

const FileUpload = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);

    try {
      //file upload delay for 2 seconds (replace with actual upload logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Once upload is successful, invoke the callback function with the selected file
      onFileUpload(selectedFile);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      // Reset state after upload is complete
      setSelectedFile(null);
      setUploading(false);
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <input
          type="file"
          accept="image/*, .pdf, .doc, .docx"
          onChange={handleFileChange}
          style={{ display: "none" }}
          id="file-upload"
        />
        <label htmlFor="file-upload">
          <Button component="span" variant="contained" color="secondary">
            Choose File
          </Button>
        </label>
        {selectedFile && (
          <Typography variant="body1">
            Selected File: {selectedFile.name}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="secondary"
          disabled={!selectedFile || uploading}
          onClick={handleUpload}
        >
          {uploading ? <CircularProgress size={24} /> : "Upload"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default FileUpload;
