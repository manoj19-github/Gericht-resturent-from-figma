import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    boxSizing: 'border-box',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    scrollBehavior: 'smooth'
  },
  body: {
    background: 'var(--color-bg)',
    height: [{ unit: 'vw', value: 100 }],
    overflowX: 'hidden'
  },
  'a': {
    color: 'unset',
    textDecoration: 'none'
  },
  gradient__bg: {
    width: [{ unit: 'vw', value: 100 }],
    background: 'radial-gradient(circle at 5% 25%,rgba(0, 40, 83, 0.91),var(--color-bg) 70%,rgba(0, 40, 83, 0.91))'
  },
  gradient__text: {
    background: 'var(--gradient-text)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  'section__padding:': {
    padding: [{ unit: 'rem', value: 4 }, { unit: 'rem', value: 6 }, { unit: 'rem', value: 4 }, { unit: 'rem', value: 6 }]
  },
  'section__margin:': {
    padding: [{ unit: 'rem', value: 4 }, { unit: 'rem', value: 6 }, { unit: 'rem', value: 4 }, { unit: 'rem', value: 6 }]
  },
  'scale-up-center': {
    WebkitAnimation: 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
    animation: 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'
  }
});
