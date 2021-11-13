import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gpt3__navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 6 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 6 }],
    '<w1050': {
      padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 3 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }]
    },
    '<w700': {
      padding: [{ unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }]
    }
  },
  'gpt3__navbar-links': {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  'gpt3__navbar-links_logo': {
    marginRight: [{ unit: 'rem', value: 2 }]
  },
  'gpt3__navbar-links_logo img': {
    width: [{ unit: 'px', value: 62.56 }],
    height: [{ unit: 'px', value: 16.02 }]
  },
  'gpt3__navbar-links_container': {
    display: 'flex',
    flexDirection: 'row'
  },
  'gpt3__navbar-sign': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '<w500': {
      display: 'none'
    }
  },
  'gpt3__navbar-links_container p': {
    color: '#fff',
    fontFamily: 'var(--font-family)',
    fontWeight: '500',
    fontSize: [{ unit: 'px', value: 14 }],
    textTransform: 'capitalize',
    margin: [{ unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }],
    cursor: 'pointer',
    lineHeight: [{ unit: 'px', value: 25 }],
    wordSpacing: '2px'
  },
  'gpt3__navbar-sign p': {
    color: '#fff',
    fontFamily: 'var(--font-family)',
    fontWeight: '500',
    fontSize: [{ unit: 'px', value: 14 }],
    textTransform: 'capitalize',
    margin: [{ unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }],
    cursor: 'pointer',
    lineHeight: [{ unit: 'px', value: 25 }],
    wordSpacing: '2px'
  },
  'gpt3__navbar-menu_container p': {
    color: '#fff',
    fontFamily: 'var(--font-family)',
    fontWeight: '500',
    fontSize: [{ unit: 'px', value: 14 }],
    textTransform: 'capitalize',
    margin: [{ unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }],
    cursor: 'pointer',
    lineHeight: [{ unit: 'px', value: 25 }],
    wordSpacing: '2px'
  },
  'gpt3__navbar-sign button': {
    borderRadius: '5px',
    background: '#ff4820',
    padding: [{ unit: 'rem', value: 0.4 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 0.4 }, { unit: 'rem', value: 1 }],
    color: '#fff',
    fontFamily: 'var(--font-family)',
    fontWeight: '500',
    left: [{ unit: 'px', value: 1153 }],
    top: [{ unit: 'px', value: 55 }],
    border: [{ unit: 'px', value: 0 }],
    outline: 'none',
    cursor: 'pointer',
    fontSize: [{ unit: 'px', value: 14 }],
    lineHeight: [{ unit: 'px', value: 25 }]
  },
  'gpt3__navbar-menu_container button': {
    borderRadius: '5px',
    background: '#ff4820',
    padding: [{ unit: 'rem', value: 0.4 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 0.4 }, { unit: 'rem', value: 1 }],
    color: '#fff',
    fontFamily: 'var(--font-family)',
    fontWeight: '500',
    left: [{ unit: 'px', value: 1153 }],
    top: [{ unit: 'px', value: 55 }],
    border: [{ unit: 'px', value: 0 }],
    outline: 'none',
    cursor: 'pointer',
    fontSize: [{ unit: 'px', value: 14 }],
    lineHeight: [{ unit: 'px', value: 25 }]
  },
  'gpt3__navbar-menu': {
    marginLeft: [{ unit: 'rem', value: 1 }],
    display: 'none',
    position: 'relative'
  },
  'gpt3__navbar-menu svg': {
    cursor: 'pointer'
  },
  'gpt3__navbar-menu_container': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column',
    textAlign: 'end',
    background: 'var(--color-footer)',
    padding: [{ unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }],
    position: 'absolute',
    top: [{ unit: 'px', value: 40 }],
    right: [{ unit: 'px', value: 0 }],
    marginTop: [{ unit: 'rem', value: 1 }],
    minWidth: [{ unit: 'px', value: 210 }],
    borderRadius: '5px',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 5 }, { unit: 'string', value: 'rgba(0,0,0,0.2)' }]
  },
  'gpt3__navbar-menu_container p': {
    margin: [{ unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'px', value: 0 }]
  },
  'gpt3__navbar-menu_container-links-sign': {
    display: 'none'
  },
  // media queries
});
