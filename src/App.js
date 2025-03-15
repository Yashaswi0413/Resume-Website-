import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, TextField, Box } from "@mui/material";

const PortfolioWireframe = () => {
  return (
    <>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>My Portfolio</Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h3">Hello, I'm Yashaswi</Typography>
        <Typography variant="subtitle1">Go Developer | AWS Enthusiast</Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" sx={{ mr: 1 }}>View Projects</Button>
          <Button variant="outlined">Contact Me</Button>
        </Box>
      </Container>

      {/* Projects Section */}
      <Container>
        <Typography variant="h4" textAlign="center" gutterBottom>Projects</Typography>
        <Grid container spacing={3}>
          {[1, 2, 3].map((project) => (
            <Grid item xs={12} md={4} key={project}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Project {project}</Typography>
                  <Typography variant="body2">Short description of the project.</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Me Section */}
      <Container sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h4">About Me</Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto", mt: 2 }}>
          Bio section content xyxyxyxyxyyxyxyxyxyxyxyxyxy
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>Download Resume</Button>
      </Container>

      {/* Contact Section */}
      <Container>
        <Typography variant="h4" textAlign="center" gutterBottom>Contact</Typography>
        <Box component="form" sx={{ maxWidth: 400, mx: "auto" }}>
          <TextField label="Name" fullWidth margin="normal" />
          <TextField label="Email" fullWidth margin="normal" />
          <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
          <Button variant="contained" fullWidth sx={{ mt: 2 }}>Send</Button>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ textAlign: "center", py: 2, mt: 5, bgcolor: "#f5f5f5" }}>
        <Typography variant="body2">© 2025 Yashaswi. All rights reserved.</Typography>
      </Box>
    </>
  );
};

export default PortfolioWireframe;
