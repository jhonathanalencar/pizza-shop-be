import { ExpressAdapter } from './infra/http/ExpressAdapter';

const httpServer = new ExpressAdapter();
httpServer.listen(3333);
