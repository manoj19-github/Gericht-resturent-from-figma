import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'gpt3__blog-container_article': {
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }],
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    background: 'var(--color-footer)'
  },
  'gpt3__blog-container_article-image': {
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }],
    background: 'var(--color-footer)'
  },
  'gpt3__blog-container_article-image img': {
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }]
  },
  'gpt3__blog-container_article-content': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1.5 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1.5 }],
    height: [{ unit: '%V', value: 1 }]
  },
  'gpt3__blog-container_article-content p': {
    fontFamily: 'var(--font-family)',
    fontWeight: 'bold',
    fontSize: [{ unit: 'px', value: 14.649 }],
    lineHeight: [{ unit: 'px', value: 35 }],
    color: '#ffffff'
  },
  'gpt3__blog-container_article-content h3': {
    fontFamily: 'var(--font-family)',
    fontWeight: '800',
    fontSize: [{ unit: 'px', value: 25.11 }],
    lineHeight: [{ unit: 'px', value: 30 }],
    color: '#ffffff',
    cursor: 'pointer',
    zIndex: '44',
    '<w550': {
      fontSize: [{ unit: 'px', value: 18 }],
      lineHeight: [{ unit: 'px', value: 24 }]
    }
  },
  'gpt3__blog-container_article-content p:last-child': {
    cursor: 'pointer'
  },
  // media query
});
