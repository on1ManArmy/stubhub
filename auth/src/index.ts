import express from 'express';
import { json } from 'body-parser';
import { currentUserRouter } from './routes/current-user';
import { signin } from './routes/signin';
import { signout } from './routes/signout';
import { signup } from './routes/signup';

const app = express();
app.use(json());

// linker
app.use(currentUserRouter);
app.use(signin);
app.use(signout);
app.use(signup);

app.listen(3000, () => {
  console.log('Listening on 3000');
});
