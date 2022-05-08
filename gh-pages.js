let ghpages = require('gh-pages');
ghpages.publish('out', {
  branch: 'gh-pages',
  dotfiles: true,
  message: `🚀 Deploy [${new Date()}]`,
}, () => {
  console.log('Published');
});