import express from 'express';
import { exec } from 'child_process';
import AppModel from '../models/AppModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { appPath, appcom } = req.body;
    const command = `"${appPath}" ${appcom}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('Error executing command:', error.message);
        return res.status(500).send('Error launching application');
      }
      res.send('Application launched successfully');
    });
  } catch (error) {
    res.status(500).json({ message: 'Error occurred', error });
  }
});

export default router;
