import request from 'supertest';
import app from '../app';
import sharp from 'sharp';

describe('Test upload endpoints', () => {
    it('Should upload a file', async () => {

        // create image
        const imgFile = await sharp({
            create: {
                width: 10,
                height: 10,
                channels: 4,
                background: { r: 0, g: 0, b: 0 }
            }
        })
            .png()
            .toBuffer();

        const response = await request(app)
            .get('/').expect(200)
            .attach('image1', imgFile);

        console.log(response.files)

        expect(response.status).toBe(200);
    });
});
