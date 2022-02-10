import 'dotenv/config';
import express, { Response, Request } from 'express';

const main = () => {
  const port = process.env.APP_PORT || 8066;
  const app = express();

  app.get('/', (_: Request, response: Response) => response.json({ status: response.statusCode }));

  app.listen(port, () => {
    console.log(`⚡️Server is listening on http://localhost:${port}`);
  });
};

main();
