import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gpt3__cta: {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'white' }],
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: [{ unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }],
    margin: [{ unit: 'vw', value: 3 }, { unit: 'vw', value: 5 }, { unit: 'vw', value: 3 }, { unit: 'vw', value: 5 }],
    borderRadius: '1rem',
    background: 'var(--gradient-bar)',
    '<w650': {
      flexDirection: 'column',
      margin: [{ unit: 'vw', value: 5 }, { unit: 'vw', value: 2 }, { unit: 'vw', value: 5 }, { unit: 'vw', value: 2 }]
    }
  },
  'gpt3__cta-container p': {
    fontFamily: 'var(--font-family)',
    fontSize: [{ unit: 'px', value: 16 }],
    color: '#0e0e0e',
    lineHeight: [{ unit: 'px', value: 30 }],
    fontWeight: '500'
  },
  'gpt3__cta-container h3': {
    fontFamily: 'var(--font-family)',
    fontSize: [{ unit: 'px', value: 24 }],
    color: '#000000',
    lineHeight: [{ unit: 'px', value: 45 }],
    fontWeight: '800'
  },
  'gpt3__cta-btn': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: [{ unit: 'rem', value: 2 }]
  },
  'gpt3__cta-btn button': {
    background: '#000000',
    borderRadius: '40px',
    color: '#ffffff',
    fontFamily: 'var(--font-family)',
    fontSize: [{ unit: 'px', value: 18 }],
    padding: [{ unit: 'rem', value: 0.5 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 0.5 }, { unit: 'rem', value: 1 }],
    border: [{ unit: 'px', value: 0 }],
    outline: 'none',
    cursor: 'pointer',
    minWidth: [{ unit: 'px', value: 150 }],
    lineHeight: [{ unit: 'px', value: 35 }],
    fontWeight: '800',
    '<w550': {
      fontSize: [{ unit: 'px', value: 14 }],
      lineHeight: [{ unit: 'px', value: 26 }]
    }
  },
  // media queries
});
