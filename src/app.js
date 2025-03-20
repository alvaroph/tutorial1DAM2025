// src/app.js
const express = require('express');
require('dotenv').config();
const sequelize = require('./db');
const Motorcycle = require('./models/Motorcycle');
const Category = require('./models/Category');

// Relacions
Category.hasMany(Motorcycle, { foreignKey: 'categoryId', onDelete: 'CASCADE' });
Motorcycle.belongsTo(Category, { foreignKey: 'categoryId' });

const motorcycleRoutes = require('./routes/motorcycles.routes');
const categoryRoutes = require('./routes/categories.routes');

const app = express();
app.use(express.json());

// Rutes JSON
app.use('/api/motorcycles', motorcycleRoutes);
app.use('/api/categories', categoryRoutes);

// Ruta de prova
app.get('/', (req, res) => {
  res.send('Benvingut al projecte Motorcicle!');
});

const port = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Base de dades sincronitzada (API JSON)');


    //Creem un parell de motos i un parell de caterories
    const catCarretera = await Category.create({ name: 'Carretera' });
    const catEnduro = await Category.create({ name: 'Enduro' });

   
    await Motorcycle.create({
      name: 'CBR 600 RR',
      brand: 'Honda',
      cc: 600,
      categoryId: catCarretera.id,
    });

    await Motorcycle.create({
      name: 'Africa Twin',
      brand: 'Honda',
      cc: 1000,
      categoryId: catEnduro.id,
    });

    // Engeguem servidor
    app.listen(port, () => {
      console.log(`Servidor escoltant a http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error a l'inici:", error);
  }
})();