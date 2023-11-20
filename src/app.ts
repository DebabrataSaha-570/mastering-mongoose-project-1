import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/config/modules/student/student.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//api/v1/students/create-student

//application routes
app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};

app.get('/', getAController);

export default app;
