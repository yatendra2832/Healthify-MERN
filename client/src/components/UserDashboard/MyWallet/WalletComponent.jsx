import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../store/auth";
import useWallet from "../../../hooks/useWallet"; // Adjust the import path based on your project structure

const WalletComponent = () => {
  const { user } = useAuth();
  const { userId } = useParams();
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { fetchWalletBalance, addMoneyToWallet, loading: walletLoading, error: walletError } = useWallet();

  useEffect(() => {
    const fetchBalance = async () => {
      setLoading(true);
      try {
        const balance = await fetchWalletBalance(userId);
        setBalance(balance);
      } catch (error) {
        setError("Error fetching balance");
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);

  const handleAddMoney = async () => {
    await addMoneyToWallet(amount, () => {
      setBalance((prevBalance) => prevBalance + amount);
      setAmount(0);
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px", marginBottom: "50px" }}>
      <Card style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: "12px" }}>
        <CardContent style={{ padding: "30px" }}>
          <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: "bold", color: "#3f51b5" }}>
            Wallet
          </Typography>
          <Typography variant="h6" align="center" gutterBottom style={{ color: "#757575" }}>
            Current Balance: ₹{balance}
          </Typography>
          <TextField
            fullWidth
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            variant="outlined"
            margin="normal"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleAddMoney}
            disabled={loading || walletLoading}
            style={{ marginTop: "16px", borderRadius: "8px", backgroundColor: "#3f51b5", color: "#fff" }}
          >
            {loading || walletLoading ? (
              <CircularProgress size={24} style={{ color: "#fff" }} />
            ) : (
              "Add Money"
            )}
          </Button>
          {error || walletError ? (
            <p style={{ color: "red", marginTop: "16px" }}>{error || walletError}</p>
          ) : null}
        </CardContent>
      </Card>
    </Container>
  );
};

export default WalletComponent;
