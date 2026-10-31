const fs = require('fs');
const content = fs.readFileSync('data/certifides.ts', 'utf8');

// Match all objects
const regex = /\{\s*"id":\s*"([^"]+)",\s*"postId":\s*"([^"]+)",\s*"title":\s*"([^"]+)",\s*"issuer":\s*"([^"]+)",\s*"score":\s*([^,]+),\s*"date":\s*"([^"]+)",\s*"description":\s*"([^"]+)",\s*"pdfUrl":\s*([^,]+),\s*"thumbnailUrl":\s*([^,]+)/g;

let match;
while ((match = regex.exec(content)) !== null) {
  const [full, id, postId, title, issuer, score, date, desc, pdfUrl, thumbnailUrl] = match;
  if (/NPTEL|IIT|IISc|Deep Learning|Python|Analytics|Machine Learning/i.test(title) || /NPTEL|IIT/i.test(desc)) {
    console.log(`Title: ${title}`);
    console.log(`  ID: ${id} | PostId: ${postId} | Score: ${score}`);
    console.log(`  PDF: ${pdfUrl}`);
    console.log(`  Thumb: ${thumbnailUrl}\n`);
  }
}
