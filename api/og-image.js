const PROJECT = 'bolao-tatame';
const KEY = 'AIzaSyCs•••••••••••••••••••••••••••••••';
const ORIGIN = 'https://bolao-tatame.vercel.app';

module.exports = async (req, res) => {
  const sala = String((req.query && req.query.sala) || 'principal').replace(/[^a-zA-Z0-9_-]/g, '') || 'principal';
  try {
    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents/salas/${sala}?key=${KEY}`;
    const r = await fetch(url);
    if (r.ok) {
      const j = await r.json();
      const dataUrl = j && j.fields && j.fields.cartazImg && j.fields.cartazImg.stringValue;
      const m = dataUrl && dataUrl.match(/^data:(image\/[a-z]+);base64,(.+)$/);
      if (m) {
        const buf = Buffer.from(m[2], 'base64');
        res.setHeader('Content-Type', m[1]);
        res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300');
        return res.status(200).send(buf);
      }
    }
  } catch (e) {}
  try {
    const def = await fetch(`${ORIGIN}/cartaz.jpg`);
    const buf = Buffer.from(await def.arrayBuffer());
    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300');
    return res.status(200).send(buf);
  } catch (e) {
    return res.status(302).setHeader('Location', `${ORIGIN}/cartaz.jpg`).end();
  }
};
