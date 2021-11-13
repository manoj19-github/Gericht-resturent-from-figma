import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gpt3__possibility: {
    display: 'flex',
    flexDirection: 'row',
    padding: [{ unit: 'vw', value: 2 }, { unit: 'vw', value: 5 }, { unit: 'vw', value: 2 }, { unit: 'vw', value: 5 }],
    '<w950': {
      flexDirection: 'column',
      padding: [{ unit: 'vw', value: 2 }, { unit: 'vw', value: 3 }, { unit: 'vw', value: 2 }, { unit: 'vw', value: 3 }]
    }
  },
  'gpt3__possibility-image': {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: [{ unit: 'rem', value: 2 }]
  },
  'gpt3__possibility-image img': {
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }]
  },
  'gpt3__possibility-content': {
    flex: '1.3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  'gpt3__possibility-content h4': {
    fontFamily: 'var(--font-family)',
    fontWeight: '500',
    fontSize: [{ unit: 'px', value: 16 }],
    lineHeight: [{ unit: 'px', value: 30 }],
    color: '#71e5ff'
  },
  'gpt3__possibility-content h4:last-child': {
    color: '#ff8a71'
  },
  'gpt3__possibility-content h1': {
    fontFamily: 'var(--font-family)',
    fontSize: [{ unit: 'px', value: 34 }],
    lineHeight: [{ unit: 'px', value: 45 }],
    fontWeight: '800'
  },
  'gpt3__possibility-content p': {
    fontFamily: 'var(--font-family)',
    fontSize: [{ unit: 'px', value: 16 }],
    lineHeight: [{ unit: 'px', value: 30 }],
    fontWeight: '300',
    color: 'var(--color-text)',
    margin: [{ unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'px', value: 0 }]
  },
  // media queries
});
