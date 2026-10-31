const fs = require('fs');
const path = require('path');

const certFile = path.resolve('data/certifides.ts');
const certContent = fs.readFileSync(certFile, 'utf8');

const thumbDir = path.resolve('public/portfolio_assets/thumbnails');
const files = fs.readdirSync(thumbDir);
const docCovers = new Set(files.filter(f => f.includes('_doc_cover_')));

console.log('Total doc covers found in thumbnails dir:', docCovers.size);

let replacedCount = 0;
const updatedContent = certContent.replace(/"thumbnailUrl":\s*"\/portfolio_assets\/thumbnails\/(LI-POST-\d+)_([^"]+)_author_avatar\.jpg"/g, (match, postId, secondId) => {
  const candidate = `${postId}_${secondId}_doc_cover_0.jpg`;
  if (docCovers.has(candidate)) {
    replacedCount++;
    return `"thumbnailUrl": "/portfolio_assets/thumbnails/${candidate}"`;
  }
  return match;
});

console.log('Replaced author avatars with doc covers:', replacedCount);
if (replacedCount > 0) {
  fs.writeFileSync(certFile, updatedContent, 'utf8');
  console.log('Updated data/certifides.ts successfully.');
}
