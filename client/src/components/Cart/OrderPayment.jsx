import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Container,
} from "@mui/material";

const TestPayment = ({
  amount,
  checkoutHandler,
  testName,
  handlePaymentSuccess,
}) => {
  return (
    <Container sx={{ my: 4 }}>
      <Card
        sx={{
          p: 4,
          textAlign: "center",
          bgcolor: "background.paper",
          border: "1px dashed",
        }}
      >
        <CardContent>
          <Typography variant="h4" color="primary" gutterBottom>
            Payment Details
          </Typography>
          {/* <Typography variant="h6" gutterBottom>
            Test Name :{testName}
          </Typography> */}
          <Typography variant="h6" gutterBottom>
            <strong>Total Order Price</strong> ₹ {amount}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => checkoutHandler(amount, handlePaymentSuccess)}
          >
            Pay Now
          </Button>
        </CardActions>
        <Typography variant="body2" color="success.main" sx={{ mt: 3 }}>
          **Please complete the payment to proceed with your Supplement Order Booking.
        </Typography>
      </Card>
    </Container>
  );
};

export default TestPayment;
