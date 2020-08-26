import express from 'express';
import fileUpload from 'express-fileupload';
const app = express();
const port = 3000;

app.use(fileUpload());

app.get('/', (req, res) => {
  res.send('hello k8s world');
});

app.post('/upload-img', (req, res) => {
  const files = (req as any).files;
  console.log(files);
  return res.status(200).json({
      'Filename': files.image1.name,
      'Size': files.image1.size,
      'mimetype': files.image1.mimetype
  });
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
