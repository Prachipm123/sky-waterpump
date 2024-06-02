// app.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

var cors = require("cors");
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    "your mongodb connection string"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Mongoose Schema
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productDesc: {
    type: String,
    required: true,
  },
  productImgs: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

// Define Mongoose schema for enquiry
const enquirySchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // Reference to the Product model
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  enquiry: {
    type: String,
    required: true,
  },
});

const Enquiry = mongoose.model("Enquiry", enquirySchema);

// Define Mongoose schema for contact us
const contactusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const ContactUs = mongoose.model("ContactUs", contactusSchema);

// Define Mongoose schema for our gallery

const ourgallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  galleryimage: {
    type: [String],
    required: true,
  },
});

const OurGallery = mongoose.model("OurGallery", ourgallerySchema);

// POST API for saving ourgallerySchema

app.post("/ourgallery", async (req, res) => {
  const ourgallery = new OurGallery(req.body);
  try {
    const newOurGallery = await ourgallery.save();
    res.status(201).json(newOurGallery);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/ourgallery", async (req, res) => {
  try {
    const ourgallery = await OurGallery.find();
    res.json(ourgallery);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST API for saving enquiry data
app.post("/enquiries", async (req, res) => {
  const enquiry = new Enquiry(req.body);
  try {
    const newEnquiry = await enquiry.save();
    res.status(201).json(newEnquiry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// POST API for saving contact data
app.post("/contactus", async (req, res) => {
  const contactus = new ContactUs(req.body);
  try {
    const newContactUs = await contactus.save();
    res.status(201).json(newContactUs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Routes
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
