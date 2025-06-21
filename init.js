db.createCollection("Images");

db.Images.insertOne({
  name: "Default photo",
  url: "https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur.png",
  description: "Initial Image For Users"
});
