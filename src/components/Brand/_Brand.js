import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gpt3__brand: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  'gpt3__brand div': {
    flex: '1',
    maxWidth: [{ unit: 'px', value: 150 }],
    minWidth: [{ unit: 'px', value: 140 }],
    margin: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }],
    display: 'flex',
    justifyContent: 'center'
  }
});
