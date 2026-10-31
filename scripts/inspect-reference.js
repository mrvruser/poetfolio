const https = require('https');

https.get('https://6ae56fb7903385b1dd787621--jade-heliotrope-6bc875.netlify.app/', (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    const headings = [...data.matchAll(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    console.log('All Headings:');
    headings.forEach(h => console.log(' - ' + h));
    const sections = [...data.matchAll(/<section[^>]*id="([^"]+)"/gi)].map(m => m[1]);
    console.log('\nSection IDs:', sections);
  });
}).on('error', err => console.log('Error:', err.message));
