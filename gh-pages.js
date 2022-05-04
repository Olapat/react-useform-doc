let ghpages = require('gh-pages');
ghpages.publish('out', {
  branch: 'master',
  dotfiles: true,
  message: `🚀 Deploy [${new Date()}]`,
}, () => {
  console.log('yayyy');
});