import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gpt3__features: {
    width: [{ unit: '%H', value: 1 }],
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: [{ unit: 'vw', value: 3 }, { unit: 'vw', value: 5 }, { unit: 'vw', value: 3 }, { unit: 'vw', value: 5 }],
    '<w990': {
      flexDirection: 'column'
    }
  },
  'gpt3__features-heading': {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    textAlign: 'left',
    marginRight: [{ unit: 'rem', value: 4 }]
  },
  'gpt3__features-heading h1': {
    fontFamily: 'var(--font-family)',
    fontWeight: '800',
    fontSize: [{ unit: 'px', value: 34 }],
    lineHeight: [{ unit: 'px', value: 45 }],
    '<w550': {
      fontSize: [{ unit: 'px', value: 28 }],
      lineHeight: [{ unit: 'px', value: 48 }]
    }
  },
  'gpt3__features-heading p': {
    fontFamily: 'var(--font-family)',
    fontWeight: '500',
    fontSize: [{ unit: 'px', value: 15 }],
    lineHeight: [{ unit: 'px', value: 25 }],
    color: '#ff8a71',
    marginTop: [{ unit: 'rem', value: 2 }]
  },
  'gpt3__features-container': {
    flex: '1.5',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column'
  },
  // media queries
});
