import React from "react";
import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
import imgSrc from "../assets/financial.webp";

const About = () => {
  const cardHeight = "650px";

  return (
    <Container maxWidth="lg " sx={{ py: 5, px: 2 }}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        mt={5}
      >
        <Grid item xs={12} md={7} style={{ height: cardHeight }}>
          <Card
            elevation={8}
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardContent style={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom mb={3}>
                About Financial Distress Prediction App
              </Typography>
              <Typography paragraph variant="body1">
                Welcome to our Financial Distress Prediction App! We utilize
                FastAPI, a powerful framework for building APIs in Python, to
                provide robust and secure services. Our mission is to help users
                identify their financial vulnerabilities by leveraging advanced
                analytics and state-of-the-art technology. By offering tailored
                insights and proactive measures, we aspire to empower people
                towards sounder financial decisions and resilience.
              </Typography>
              <Typography paragraph variant="body1">
                At the core of our solution lies the capability to assess
                potential financial distress risks faced by businesses and
                individuals alike. With our intuitive user interface, simply
                submit pertinent financial indicators, and our sophisticated
                machine learning models shall analyze extensive historical
                records alongside relevant economic trends. Consequently, these
                computations yield detailed predictions regarding probable
                future states, enabling informed actions today.
              </Typography>
              <Typography paragraph variant="body1">
                Enjoy instantaneous results accompanied by interactive
                visualizations illustrating how specific aspects impact overall
                evaluations. Rest assured knowing that safeguarding privacy
                stands atop our priorities – encrypted communication channels
                ensure security while maintaining compliance with stringent
                regulatory standards. Additionally, personalize notification
                settings catered explicitly to individual preferences further
                strengthen our commitment to client satisfaction.
              </Typography>
              <Typography variant="h5" gutterBottom mt={3}>
                Key Benefits
              </Typography>
              <ul>
                <li>
                  Easy-to-navigate dashboard facilitating quick entry of
                  essential financial metrics
                </li>
                <li>
                  Reliable and accurate algorithms generating precise foresight
                </li>
                <li>
                  Immediate understanding of ramifications stemming from
                  discrete factors affecting predicted outcomes
                </li>
                <li>
                  Secure transmission protocols protecting sensitive information
                  throughout transactions
                </li>
                <li>
                  Flexible alert configurations reflective of unique concerns
                  and interests
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          style={{ height: cardHeight, position: "relative" }}
        >
          <img
            src={imgSrc}
            alt="Financial Distress Prediction App Illustration"
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
