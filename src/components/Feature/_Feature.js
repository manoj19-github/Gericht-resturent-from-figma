import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'gpt3__features-container_feature': {
    width: [{ unit: '%H', value: 1 }],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    margin: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }]
  },
  'gpt3__features-container_feature-title': {
    flex: '1',
    maxWidth: [{ unit: 'px', value: 180 }],
    marginRight: [{ unit: 'rem', value: 2 }]
  },
  'gpt3__features-container_feature-title h1': {
    fontFamily: 'var(--font-family)',
    fontWeight: '800',
    fontSize: [{ unit: 'px', value: 18 }],
    lineHeight: [{ unit: 'px', value: 25 }],
    letterSpacing: [{ unit: 'em', value: -0.04 }],
    color: '#ffffff',
    '<w550': {
      fontSize: [{ unit: 'px', value: 14 }],
      lineHeight: [{ unit: 'px', value: 22 }]
    }
  },
  'gpt3__features-container_feature-title div': {
    width: [{ unit: 'px', value: 38 }],
    height: [{ unit: 'px', value: 3 }],
    background: 'var(--gradient-bar)',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'string', value: 'rgba(0,0,0,0.25)' }],
    marginBottom: [{ unit: 'rem', value: 0.24 }]
  },
  'gpt3__features-container_feature-text': {
    flex: '2',
    maxWidth: [{ unit: 'px', value: 390 }],
    display: 'flex'
  },
  'gpt3__features-container_feature-text p': {
    fontFamily: 'var(--font-family)',
    fontWeight: '500',
    fontSize: [{ unit: 'px', value: 13 }],
    lineHeight: [{ unit: 'px', value: 25 }],
    letterSpacing: [{ unit: 'em', value: -0.04 }],
    color: 'var(--color-text)'
  }
});
