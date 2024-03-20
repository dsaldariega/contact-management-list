import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardView = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => {
        const { id, name, email, contact_number } = contact;
        return (
          <Card sx={{ minWidth: 275 }} key={id}>
            <CardContent>
              <Typography variant="h5" component="div">
                {name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {email}
              </Typography>
              <Typography variant="body2">{contact_number}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                Edit
              </Button>
              <Button variant="contained" color="error">
                Delete
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default CardView;
