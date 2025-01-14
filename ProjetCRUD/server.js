const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { Book, User } = require("./schema");
const mongoose = require("mongoose");

const router = express.Router();

router.post(
  "/books",
  [
    body("title").isString().notEmpty(),
    body("author").isString().notEmpty(),
    body("rating").isString().notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors });
    }
    try {
      const book = new Book(req.body);
      await book.save();
      res.status(201).json(book);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/books/:id", async (req, res) => {
  try {
    const book = await Book.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/books/:id", async (req, res) => {
  try {
    await Book.findOneAndDelete(req.params.id, {
      new: true,
    });
    res.json({ message: "Livre supprimé" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/users", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

mongoose
  .connect("mongodb://localhost:27017/nomDeVotreBaseDeDonnees", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.error("Erreur de connexion:", err));

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Utiliser les routes définies précédemment
app.use("/", router);

// Écoute sur le port 3000
app.listen(3000, () => {
  console.log("Serveur en cours d'exécution sur http://localhost:3000");
});
