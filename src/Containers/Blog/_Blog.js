import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gpt3__blog: {
    padding: [{ unit: 'vw', value: 3 }, { unit: 'vw', value: 4 }, { unit: 'vw', value: 3 }, { unit: 'vw', value: 4 }],
    display: 'flex',
    flexDirection: 'column'
  },
  'gpt3__blog-heading': {
    width: [{ unit: '%H', value: 1 }],
    textAlign: 'left',
    marginBottom: [{ unit: 'rem', value: 1 }]
  },
  'gpt3__blog-heading h1': {
    fontFamily: 'var(--font-family)',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: [{ unit: 'px', value: 63 }],
    lineHeight: [{ unit: 'px', value: 74 }],
    letterSpacing: [{ unit: 'px', value: -0.04 }]
  },
  'gpt3__blog-container': {
    display: 'flex',
    flexDirection: 'row',
    '<w990': {
      flexDirection: 'column'
    }
  },
  'gpt3__blog-container_groupA': {
    flex: '0.75',
    marginRight: [{ unit: 'rem', value: 2 }]
  },
  'gpt3__blog-container_groupB': {
    flex: '1',
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    gridGap: '2rem',
    '<w700': {
      gridTemplateColumns: 'repeat(1,1fr)'
    }
  },
  // media queries
});
