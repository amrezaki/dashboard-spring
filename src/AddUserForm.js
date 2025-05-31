// src/AddUserForm.js
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box
} from '@mui/material';

function AddUserForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      alert("✅ Utilisateur ajouté !");
      setForm({ firstName: '', lastName: '', phone: '', address: '' });
    } else {
      alert("❌ Erreur lors de l'ajout");
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          ➕ Ajouter un utilisateur
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Prénom"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Nom"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Téléphone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Adresse"
            name="address"
            value={form.address}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            fullWidth
          >
            Ajouter
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default AddUserForm;
