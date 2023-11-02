/**
 * iframe: true
 * compact: true
 */
import { Designer } from '@yunti/shared';
import React from 'react';
import assets from './assets.json';

const DesignerDemo = () => (
  <Designer scenarioName="react-markdown" displayName="react-markdown" assets={assets} />
);

export default DesignerDemo;
