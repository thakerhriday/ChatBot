import natural from 'natural';
import Nanny from '../models/nannyModel.js';
import Cart from '../models/cartModel.js';

const tokenizer = new natural.WordTokenizer();

export const chatbotResponse = async (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  const tokens = tokenizer.tokenize(userMessage);

  let responseText = "I'm here to help! Please clarify your request.";

  try {
    if (tokens.includes("book") && tokens.includes("nanny")) {
      const availableNannies = await Nanny.find({});
      responseText = availableNannies.length > 0
        ? `We have ${availableNannies.length} nannies available. Would you like to see their profiles?`
        : "Currently, no nannies are available for booking.";
    } else if (tokens.includes("status") && tokens.includes("booking")) {
      const cartItems = await Cart.find({ userId: req.body.userId });
      responseText = cartItems.length > 0
        ? `You have ${cartItems.length} items in your cart.`
        : "Your cart is currently empty.";
    }

    res.json({ response: responseText });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
};
