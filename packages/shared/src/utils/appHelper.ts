import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler';

export const appHelper = {
  requestHandlersMap: {
    fetch: createFetchHandler(),
  },
  utils: {
    demoUtil: (...params: any[]) => {
      // eslint-disable-next-line no-console
      console.log(`this is a demoUtil with params ${params}`);
    },
  },
  constants: {
    ConstantA: 'ConstantA',
    ConstantB: 'ConstantB',
  },
};
