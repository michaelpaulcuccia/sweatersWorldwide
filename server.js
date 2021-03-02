import express from 'express';
import mongoose from 'mongoose';
//import connect from './config.js';
import path from 'path';
import morgan from 'morgan';
import sweaterRoutes from './routes/api/sweaterRoutes.js';

(async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (err) {
        console.error(`Error: ${err.message}`);
        //exit process with failure
        process.exit(1);
    }
})();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Middleware - get data from req.body in routes
app.use(express.json({ extended: false }));

//Routes
app.use('/api/sweaters', sweaterRoutes);

//deployment
const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on Port: ${PORT}`);
});

/*
***************************************************************************************************************
(node:16100) Warning: Accessing non-existent property 'MongoError' of
module exports inside circular dependency
*** NOTE ON ERROR:: SAFE TO IGNORE
(Use `node --trace-warnings ...` to show where the warning was created)
https://developer.mongodb.com/community/forums/t/warning-accessing-non-existent-property-mongoerror-of-module-exports-inside-circular-dependency/15411/6
***************************************************************************************************************
*/