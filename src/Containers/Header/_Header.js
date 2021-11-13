import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gpt3__header: {
    display: 'flex',
    flexDirection: 'row',
    width: [{ unit: '%H', value: 1 }],
    '<w1050': {
      flexDirection: 'column'
    }
  },
  'gpt3__header-content': {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 5 }],
    '<w650': {
      margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 2 }, { unit: 'px', value: 0 }]
    }
  },
  'gpt3__header-content h1': {
    fontFamily: 'var(--font-family)',
    fontWeight: '800',
    fontSize: [{ unit: 'rem', value: 2.4 }],
    lineHeight: [{ unit: 'px', value: 75 }],
    letterSpacing: [{ unit: 'em', value: -0.04 }]
  },
  'gpt3__header-content p': {
    fontFamily: 'var(--font-family)',
    fontWeight: 'normal',
    fontSize: [{ unit: 'rem', value: 0.8 }],
    lineHeight: [{ unit: 'px', value: 25 }],
    color: 'var(--color-text)',
    marginTop: [{ unit: 'rem', value: 1.5 }]
  },
  'gpt3__header-content__input': {
    width: [{ unit: '%H', value: 1 }],
    margin: [{ unit: 'rem', value: 2 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'px', value: 0 }],
    display: 'flex'
  },
  'gpt3__header-content__input input': {
    flex: '2',
    width: [{ unit: '%H', value: 1 }],
    minHeight: [{ unit: 'px', value: 50 }],
    background: 'var(--color-footer)',
    fontFamily: 'var(--font-family)',
    fontSize: [{ unit: 'rem', value: 0.8 }],
    lineHeight: [{ unit: 'px', value: 35 }],
    color: '#306184',
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'var(--color-footer)' }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }],
    outline: 'none',
    color: '#fff',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    '<w490': {
      fontSize: [{ unit: 'px', value: 12 }],
      lineHeight: [{ unit: 'px', value: 16 }]
    }
  },
  'gpt3__header-content__input button': {
    flex: '0.6',
    width: [{ unit: '%H', value: 1 }],
    minHeight: [{ unit: 'px', value: 50 }],
    background: '#ff4820',
    transform: 'matrix(-1,0,0,0,1,0,0)',
    fontSize: [{ unit: 'px', value: 20 }],
    fontFamily: 'var(--font-family)',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#ffffff',
    lineHeight: [{ unit: 'px', value: 27 }],
    cursor: 'pointer',
    outline: 'none',
    border: [{ unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }],
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px'
  },
  'gpt3__header-content__people': {
    width: [{ unit: '%H', value: 1 }],
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: [{ unit: 'rem', value: 0.5 }]
  },
  'gpt3__header-content__people img': {
    width: [{ unit: 'px', value: 181.79 }],
    height: [{ unit: 'px', value: 38 }]
  },
  'gpt3__header-content__people p': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }],
    fontFamily: 'var(--font-family)',
    fontWeight: '500',
    fontSize: [{ unit: 'px', value: 12 }],
    lineHeight: [{ unit: 'px', value: 38 }],
    color: '#ffffff',
    textAlign: 'center',
    wordSpacing: '2px'
  },
  'gpt3__header-image': {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  'gpt3__header-image img': {
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }]
  }
});
