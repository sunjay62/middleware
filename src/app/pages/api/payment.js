import nextConnect from 'next-connect';
import cors from 'cors';

const handler = nextConnect();

// Izinkan akses lintas domain dari semua origin
handler.use(
  cors({
    origin: '*',
  })
);

handler.post('/', (req, res) => {
  console.log('sampe sini udah');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).send('Payment modal shown');
});

export default handler;
