function createSlug (title) {
  const slug = title.split (' ').join ('-').toLowerCase ();
  console.log (slug);
  return slug;
}

module.exports = createSlug;
