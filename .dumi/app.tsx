/**
 * Licensed Materials - Property of tenxcloud.com
 * (C) Copyright 2023 TenxCloud. All Rights Reserved.
 */

/**
 * app
 * @author songsz
 * @date 2023-08-30
 */

const PREVIEW_PATH = 'lowcode-materials/shared/index';

export function patchRoutes({ routes, routeComponents }) {
  Object.keys(routes).forEach(key => {
    console.log('key', key);
    if (key === PREVIEW_PATH || key.toUpperCase().endsWith('/README')) {
      delete routes[key];
      delete routeComponents[key];
    }
  });
}

export function patchClientRoutes({ routes }) {
  const i = routes?.[0]?.children?.findIndex(route => route.id === 'DocLayout');
  if (i === -1 || !routes[0].children[i]?.children?.length) return;
  const filterRoute = routes[0].children[i].children.filter(
    item => !(item.id.toUpperCase().endsWith('/README') || item.id === PREVIEW_PATH)
  );
  routes[0].children[i].children = filterRoute;
  routes[0].children[i].routes = filterRoute;
}
