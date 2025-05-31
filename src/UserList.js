import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, Button, Box, TextField
} from '@mui/material';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');

  // ➕ Ajout d'un utilisateur
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8088/users', {
        nom,
        prenom,
        telephone,
        adresse,
      });

      alert('Utilisateur ajouté !');
      setUsers([...users, response.data]);

      // Réinitialiser le formulaire
      setNom('');
      setPrenom('');
      setTelephone('');
      setAdresse('');
    } catch (error) {
      console.error('Erreur lors de l\'ajout :', error);
    }
  };

  // 🔄 Charger les utilisateurs
  useEffect(() => {
    axios.get('http://localhost:8088/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error('Erreur lors du fetch :', err));
  }, []);

  return (
    <div className="main-content">
      <Typography variant="h5" gutterBottom>👥 Liste des utilisateurs</Typography>

      {/* 🔽 Formulaire d'ajout */}
      <Box component="form" onSubmit={handleSubmit} mb={4}>
        <TextField label="Nom" value={nom} onChange={e => setNom(e.target.value)} fullWidth margin="dense" />
        <TextField label="Prénom" value={prenom} onChange={e => setPrenom(e.target.value)} fullWidth margin="dense" />
        <TextField label="Téléphone" value={telephone} onChange={e => setTelephone(e.target.value)} fullWidth margin="dense" />
        <TextField label="Adresse" value={adresse} onChange={e => setAdresse(e.target.value)} fullWidth margin="dense" />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          ➕ Ajouter un utilisateur
        </Button>
      </Box>

      {/* 📋 Tableau des utilisateurs */}
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#f0f0f0' }}>
              <TableCell><strong>Nom</strong></TableCell>
              <TableCell><strong>Prénom</strong></TableCell>
              <TableCell><strong>Téléphone</strong></TableCell>
              <TableCell><strong>Adresse</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.nom}</TableCell>
                <TableCell>{user.prenom}</TableCell>
                <TableCell>{user.telephone}</TableCell>
                <TableCell>{user.adresse}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserList;
