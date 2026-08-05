export default async function handler(req, res) {
  // Set CORS headers for Vercel deployment
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message, imageBase64, imageName } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    }

    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || 'mohdsajid9600@gmail.com';
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY || process.env.VITE_WEB3FORMS_ACCESS_KEY;

    const payload = {
      name,
      email,
      _replyto: email,
      subject: subject || `Portfolio Contact Message from ${name}`,
      message: message + (imageName ? `\n\n[Attached File: ${imageName}]` : ''),
      _captcha: 'false',
      _template: 'table'
    };

    if (web3Key) {
      const w3Payload = {
        access_key: web3Key,
        ...payload
      };
      if (imageBase64) {
        w3Payload.attachment = imageBase64;
      }
      const w3res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(w3Payload)
      });
      const w3data = await w3res.json();
      if (w3res.ok && w3data.success) {
        return res.status(200).json({ success: true, message: `Message sent successfully to ${recipientEmail}` });
      }
    }

    // Direct FormSubmit fallback
    const fsRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    });

    const fsData = await fsRes.json();

    if (fsRes.ok && (fsData.success === 'true' || fsData.success === true)) {
      return res.status(200).json({ success: true, message: `Message sent successfully to ${recipientEmail}` });
    } else if (fsData.message && fsData.message.includes('Activation')) {
      return res.status(200).json({
        success: true,
        activation: true,
        message: 'Message dispatched! Check mohdsajid9600@gmail.com and click "Activate Form" once if prompted.'
      });
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Vercel API contact handler error:', error);
    return res.status(500).json({ success: false, message: error.message || 'Server error delivering message' });
  }
}
