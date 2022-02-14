import { createServer, Model } from 'miragejs';
import reaches from './mocks/reach-data.json';
import { ReachDataProps } from './types';

export function MockServer({ environment = 'development' }) {
  return createServer({
    environment,
    routes() {
      this.namespace = 'api';
      this.get('/reaches');
    },
    models: {
      reach: Model.extend<Partial<ReachDataProps>>({}),
    },
    fixtures: {
      reaches,
    },
    seeds(server) {
      server.loadFixtures();
    },
  });
}
