// tests/utils/linkChecker.js
async function getAllLinks(page) {
  return await page.$$eval('a[href]', links =>
    links.map(link => link.href).filter(href => !href.startsWith('mailto:'))
  );
}

module.exports = { getAllLinks }; 