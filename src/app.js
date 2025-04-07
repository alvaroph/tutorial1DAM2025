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

// Rutes EJS
const motorcycleRoutesEJS = require('./routes/motorcyclesEJS.routes');
const categoryRoutesEJS = require('./routes/categoriesEJS.routes');

const app = express();
app.use(express.urlencoded({ extended: true })); // per formularis
app.use(express.json());


//Sessió 8
app.set('view engine', 'ejs');
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
//Fi de la sessió 8

// Rutes JSON
app.use('/api/motorcycles', motorcycleRoutes);
app.use('/api/categories', categoryRoutes);

// Rutes EJS
app.use('/motorcycles', motorcycleRoutesEJS);
app.use('/categories', categoryRoutesEJS);

// Configurar carpeta estática para servir las imágenes
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Ruta de prova
app.get('/', (req, res) => {
  res.render('index');
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
      country: 'japan',
      cc: 600,
      categoryId: catCarretera.id,
    });

    await Motorcycle.create({
      name: 'Africa Twin',
      brand: 'Honda',
      country: 'japan',
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