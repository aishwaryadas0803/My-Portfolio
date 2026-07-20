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

  // Securely log the message
  console.log(`[CONTACT_SUBMISSION] Time: ${new Date().toISOString()}`);
  console.log(`- From Name: ${name}`);
  console.log(`- Contact Email: ${email}`);
  console.log(`- Message: "${message}"`);

  // Forward submission to FormSubmit for direct email delivery to aishwaryadas0803@gmail.com
  fetch('https://formsubmit.co/ajax/aishwaryadas0803@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: `Portfolio Contact: Message from ${name}`,
      _template: 'table'
    })
  }).then(() => {
    console.log(`[CONTACT_SUBMISSION] Successfully forwarded message to aishwaryadas0803@gmail.com`);
  }).catch((err) => {
    console.error(`[CONTACT_SUBMISSION] FormSubmit forwarding error: ${err.message}`);
  });

  // Send success response to client
  res.status(200).json({
    success: true,
    message: "Thank you for reaching out, your message has been sent to aishwaryadas0803@gmail.com!"
  });
};

module.exports = {
  submitContactForm
};
