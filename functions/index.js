const functions = require("firebase-functions");

const express = require("expess");

const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51LNiFFFongPJnIqHW8tFihBMrSIx8KM2nS7q5SWDu0WmFqD5QixKXpuxLsmNF8sgo1MFuv6hH9Xqat77Xj2A3cVk00PpMJADzZ"
);

// App config
const app = express();

// Middlewares
app.use(cors({orign: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response .status(200).send("hello world"));

// Listen command
exports.api = functions.https.onRequest(app);
