import express from 'express';

export class ExpressAdapter {
  private readonly app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  listen(port: number) {
    this.app.listen(port, () =>
      console.log(`Server is running on port ${port}...`)
    );
  }
}
