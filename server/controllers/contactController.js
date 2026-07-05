/**
 * Contact Controller
 * Handles and processes contact form submissions.
 */

const submitContactForm = (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill out all required fields: name, email, and message."
    });
  }

  // Basic email pattern regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address."
    });
  }

  // Securely log the message (or write to a database/file)
  console.log(`[CONTACT_SUBMISSION] Time: ${new Date().toISOString()}`);
  console.log(`- From Name: ${name}`);
  console.log(`- Contact Email: ${email}`);
  console.log(`- Message Snippet: "${message.substring(0, 100)}${message.length > 100 ? "..." : ""}"`);

  // Send success response
  res.status(200).json({
    success: true,
    message: "Thank you for reaching out, Aishwarya will get back to you soon!"
  });
};

module.exports = {
  submitContactForm
};
