import mongoose from 'mongoose';
import { DB_HOST } from '../configs/index';
mongoose.connect(DB_HOST)
  .then(data => {
    console.log('Connect Success');
  }).catch(err => {
    console.log('Connect Error:' + err);
  })