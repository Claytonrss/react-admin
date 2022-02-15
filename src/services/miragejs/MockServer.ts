import { createServer, Model } from 'miragejs';
import reaches from './mocks/reach-data.json';
import demographics from './mocks/demographic-data.json';
import { DemographicDataProps, ReachDataProps } from './types';

export function MockServer({ environment = 'development' }) {
  return createServer({
    environment,
    routes() {
      this.namespace = 'api';
      this.get('/reaches');
      this.get('/demographics');
    },
    models: {
      reach: Model.extend<Partial<ReachDataProps>>({}),
      demographic: Model.extend<Partial<DemographicDataProps>>({}),
    },
    fixtures: {
      reaches,
      demographics,
    },
    seeds(server) {
      server.loadFixtures();
    },
  });
}
