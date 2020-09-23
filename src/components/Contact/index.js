import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function Contact() {

  return (
    <Card style={{border: 'none'}}>
      <CardContent>
        <Typography color="textSecondary">
          Contact Information
        </Typography>
        <Typography variant="body2" component="p">
       Email: jwhityoung@gmail.com
        </Typography>
        <Typography variant="body2" component="p">
      Phone: 210.215.2484
        </Typography>
      </CardContent>
    </Card>
  );
}
