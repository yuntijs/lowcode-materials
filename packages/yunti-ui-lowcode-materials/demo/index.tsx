/**
 * iframe: true
 * compact: true
 */
import { Designer } from '@yuntijs/lowcode-materials-shared';
import React from 'react';

import assets from './assets.json';

const DesignerDemo = () => (
  <Designer assets={assets} displayName="yunti-ui" scenarioName="yunti-ui" />
);

export default DesignerDemo;
