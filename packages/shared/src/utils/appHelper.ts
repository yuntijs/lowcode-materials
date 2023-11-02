import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler';
export const appHelper = {
  requestHandlersMap: {
    fetch: createFetchHandler(),
  },
  utils: {
    // eslint-disable-next-line no-console
    demoUtil: (...params: any[]) => {
      console.log(`this is a demoUtil with params ${params}`);
    },
  },
  constants: {
    ConstantA: 'ConstantA',
    ConstantB: 'ConstantB',
  },
};
