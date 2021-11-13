import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gpt3__whatgpt3: {
    display: 'flex',
    flexDirection: 'column',
    padding: [{ unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }],
    background: 'var(--color-footer)',
    // ff 3.6+
    background: '-moz-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)',
    // safari 5.1+,chrome 10+
    background: '-webkit-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)',
    // opera 11.10+
    background: '-o-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)',
    // ie 10+
    background: '-ms-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)',
    // global 92%+ browsers support
    background: 'radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
  },
  'gpt3__whatgpt3-feature': {
    display: 'flex'
  },
  'gpt3__whatgpt3-feature gpt3__feature-container__feature': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'gpt3__whatgpt3-feature gpt3__feature-container__feature-text': {
    maxWidth: [{ unit: 'px', value: 700 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'gpt3__whatgpt3-heading': {
    display: 'flex',
    flexDirecton: 'row',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: [{ unit: 'rem', value: 4 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 2 }, { unit: 'px', value: 0 }]
  },
  'gpt3__whatgpt3-heading h1': {
    fontFamily: 'var(--font-family)',
    fontSize: [{ unit: 'px', value: 34 }],
    lineHeight: [{ unit: 'px', value: 45 }],
    maxWidth: [{ unit: 'px', value: 510 }],
    fontWeight: '800'
  },
  'gpt3__whatgpt3-heading p': {
    fontFamily: 'var(--font-family)',
    fontWeight: '500',
    fontSize: [{ unit: 'px', value: 16 }],
    lineHeight: [{ unit: 'px', value: 30 }],
    color: 'var(--color-subtext)',
    cursor: 'pointer'
  },
  'gpt3__whatgpt3-container': {
    display: 'flex',
    flexFlow: 'row wrap',
    marginTop: [{ unit: 'rem', value: 2 }]
  }
});
