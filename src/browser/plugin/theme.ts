import { bundleNodecg } from './nodecg';

export const theme = bundleNodecg.bundleConfig.theme || {
  primary: '#104200',
  secondary: '#208200',
  text: '#ffffff',
  timer: {
    pause: '#888888',
    running: '#ffffff',
    finish: '#ff9900'
  }
};