const elasticlunr = require("elasticlunr");
  
module.exports = function (collection) {
  // what fields we'd like our index to consist of
  var index = elasticlunr(function () {
    this.addField("title");
    this.addField("body");
    this.addField("tags");
    this.setRef("id");
  });

  // loop through each page and add it to the index
  collection.forEach((page) => {
    index.addDoc({
      id: page.url,
      title: page.template.frontMatter.data.title,
      tags: page.template.frontMatter.data.tags,
      body: page.template.page
    });
  });

  return index.toJSON();
};
