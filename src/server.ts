import express from 'express';

import { categoriesRoutes } from './modules/cars/routes/categories.routes';
import { specificationsRoutes } from './modules/cars/routes/specifications.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);

app.listen(3333, () => console.log('Server running 2'));
