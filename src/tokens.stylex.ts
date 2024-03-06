import * as stylex from '@stylexjs/stylex';


const DARK = '@media (prefers-color-scheme: dark)';

export const colors = stylex.defineVars({
  primaryText: {default: '#111111', [DARK]: '#eeeeee'},
  secondaryText: {default: '#333', [DARK]: '#ccc'},
  accent: {default: '#be51c8', [DARK]: '#be51c8'},
  background: {default: 'eeeeee', [DARK]: '#121212'},
  lineColor: {default: 'gray', [DARK]: 'lightgray'},
});

export const spacing = stylex.defineVars({
  sm: { default: '0.25em' }
})
export const tokens = stylex.defineVars({
  primaryText: 'black',
  secondaryText: '#333',
  accent: 'blue',
  background: 'white',
  lineColor: 'gray',
  borderRadius: '4px',
  fontFamily: 'system-ui, sans-serif',
  fontSize: '16px',
 });
