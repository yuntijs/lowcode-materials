/**
 * iframe: true
 * compact: true
 */
import { Designer } from '@yunti/shared';
import React from 'react';
import assets from './assets.json';

const DesignerDemo = () => (
  <Designer scenarioName="yunti-ui" displayName="yunti-ui" assets={assets} />
);

export default DesignerDemo;
