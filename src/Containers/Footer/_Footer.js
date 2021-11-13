import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gpt3__footer: {
    display: 'flex',
    padding: [{ unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'px', value: 0 }],
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--color-footer)'
  },
  'gpt3__footer-heading': {
    width: [{ unit: '%H', value: 1 }],
    textAlign: 'center',
    marginBottom: [{ unit: 'rem', value: 1 }],
    fontFamily: 'var(--font-family)'
  },
  'gpt3__footer-btn': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }],
    textAlign: 'center',
    marginBottom: [{ unit: 'rem', value: 3 }],
    cursor: 'pointer'
  },
  'gpt3__footer-btn p': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ffffff' }],
    boxSizing: 'border-box',
    fontFamily: 'var(--font-family)',
    fontSize: [{ unit: 'px', value: 18 }],
    color: '#ffffff',
    lineHeight: [{ unit: 'px', value: 21 }],
    marginBottom: [{ unit: 'rem', value: 2 }],
    padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 2 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 2 }],
    wordSpacing: '2px'
  },
  'gpt3__footer-links': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: [{ unit: '%H', value: 1 }],
    textAlign: 'left',
    padding: [{ unit: 'rem', value: 0.5 }, { unit: 'rem', value: 2 }, { unit: 'rem', value: 0.5 }, { unit: 'rem', value: 2 }]
  },
  'gpt3__footer-links div': {
    width: [{ unit: 'px', value: 250 }],
    margin: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }],
    '<w550': {
      margin: [{ unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'px', value: 0 }]
    }
  },
  'gpt3__footer-links_logo': {
    display: 'flex',
    flexDirection: 'column'
  },
  'gpt3__footer-links_logo img': {
    width: [{ unit: 'px', value: 118 }],
    height: [{ unit: 'px', value: 30 }],
    marginBottom: [{ unit: 'rem', value: 1 }]
  },
  'gpt3__footer-links_logo p': {
    margin: [{ unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'px', value: 0 }],
    fontFamily: 'var(--font-family)',
    fontSize: [{ unit: 'px', value: 14 }],
    lineHeight: [{ unit: 'px', value: 27 }],
    color: '#ffffff'
  },
  'gpt3__footer-links_div': {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  'gpt3__footer-links_div h4': {
    fontFamily: 'var(--font-family)',
    fontSize: [{ unit: 'px', value: 14 }],
    lineHeight: [{ unit: 'px', value: 17 }],
    color: '#ffffff',
    marginBottom: [{ unit: 'rem', value: 1 }]
  },
  'gpt3__footer-links_div p': {
    fontFamily: 'var(--font-family)',
    fontSize: [{ unit: 'px', value: 12 }],
    lineHeight: [{ unit: 'px', value: 15 }],
    color: '#ffffff',
    margin: [{ unit: 'rem', value: 0.4 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 0.4 }, { unit: 'px', value: 0 }],
    cursor: 'pointer'
  },
  'gpt3__footer-copyright': {
    marginTop: [{ unit: 'rem', value: 2 }],
    textAlign: 'center',
    width: [{ unit: '%H', value: 1 }]
  },
  'gpt3__footer-copyright p': {
    fontFamily: 'var(--font-family)',
    fontSize: [{ unit: 'px', value: 16 }],
    lineHeight: [{ unit: 'px', value: 25 }],
    color: '#ffffff',
    margin: [{ unit: 'rem', value: 0.4 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 0.4 }, { unit: 'px', value: 0 }],
    wordSpacing: '4px'
  },
  // media queries
});
