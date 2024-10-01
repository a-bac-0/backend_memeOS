import request from 'supertest';
import express from 'express';
import router from '../routes/memeRoutes.js';
import memeModel from '../models/memeModel.js';
import db from '../database/db.js';

// ======================================
// Configuración de la aplicación express
// ======================================
const app = express();
//Middleware para parsear las solicitudes en formato JSON
app.use(express.json());
//prefijo para las rutas usando un enrutador
app.use('/api', router);


// ===================================
// Configuración de la base de datos
// =================================
beforeAll(async () => {
    // Limpiamos la base de datos entre pruebas
    await db.sync({ force: true });
});

afterEach(async () => {
    // Limpiamos los memes después de cada prueba
    await memeModel.destroy({ where: {} });
});

afterAll(async () => {
    // Cerramos la conexión a la base de datos después de las pruebas
    await db.close();
});


// ===================
// TODAS LAS  DEL CRUD
// ===================
describe('Meme Controller CRUD Tests', () => {

    // =============================
    // Test para crear un nuevo meme
    // =============================
    it('should create a meme', async () => {
        const memeData = {
            name: 'Test Meme',
            image: 'http://example.com/image.jpg',
            date: '2024-01-01',
            author: 'Test Author',
            stream: 'test_stream',
            description: 'This is a test description',
        };

        const response = await request(app).post('/api/newmeme').send(memeData);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe("✅ Meme created successfully");
        expect(response.body.data.name).toBe(memeData.name);
        expect(response.body.data.image).toBe(memeData.image);
        expect(response.body.data.date).toBe(memeData.date);
        expect(response.body.data.author).toBe(memeData.author);
        expect(response.body.data.stream).toBe(memeData.stream);
        expect(response.body.data.description).toBe(memeData.description);
        expect(response.body.data).toHaveProperty('id');
    });

    //=================================
    // Test para obtener todos los memes
    // ==================================
    it('should get all memes', async () => {

        const response = await request(app).get('/api/memes');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body.data)).toBe(true);

        // Recuperamos los memes de la base de datos
        const memesInDb = await memeModel.findAll();

        // Comprobamos que la longitud de la respuesta coincida con la longitud de los memes en la base de datos
        expect(response.body.data).toHaveLength(memesInDb.length);

    });

    // ================================
    // Test para obtener un meme por ID
    // ================================
    it('should get one meme by id', async () => {
        const meme = await memeModel.create({
            name: 'Test Meme',
            image: 'http://example.com/image.jpg',
            date: '2024-01-01',
            author: 'Test Author',
            stream: 'stream',
            description: 'Test description'
        });

        const response = await request(app).get(`/api/meme/${meme.id}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("✅ Meme retrieved successfully");
        expect(response.body.data.name).toBe(meme.name);
    });

    // ============================
    // Test para actualizar un meme
    // ============================
    it('should update a meme', async () => {
        const meme = await memeModel.create({
            name: 'Old Meme',
            image: 'http://example.com/oldimage.jpg',
            date: '2024-01-01',
            author: 'Test Author',
            stream: 'stream',
            description: 'Old description'
        });

        const updateData = {
            name: 'Updated Meme',
            date: '2024-01-02',
            author: 'Updated Author',
            stream: 'updated_stream',
            description: 'Updated description'
        };

        const response = await request(app).put(`/api/meme/${meme.id}`).send(updateData);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("✅ Meme updated successfully");
        expect(response.body.data.name).toBe(updateData.name);
    });


    // ==========================
    // Test para eliminar un meme
    // ==========================
    it('should delete a meme', async () => {
        const meme = await memeModel.create({
            name: 'Test Meme to Delete',
            image: 'http://example.com/image.jpg',
            date: '2024-01-01',
            author: 'Test Author',
            stream: 'stream',
            description: 'Description'
        });

        const response = await request(app).delete(`/api/meme/${meme.id}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("✅ Meme deleted successfully");

        const deletedMeme = await memeModel.findByPk(meme.id);
        // Verificamos que el meme ya no existe
        expect(deletedMeme).toBeNull();
    });

    // =======================================
    // Test para manejar un meme no encontrado
    // =======================================
    it('should return 404 if meme not found', async () => {
        const response = await request(app).get('/api/meme/999')

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: "❌ Meme not found" });
    });

    // ===================================================
    // Test para manejar errores en la creación de un meme
    // ===================================================
    it('should handle errors on meme creation', async () => {
        const response = await request(app).post('/api/newmeme').send({
            name: '',
            image: 'invalid-url',
            date: '',
            author: '',
            stream: '',
            description: '',
        });

        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    });
});

