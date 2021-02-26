import express from 'express';
import mongoose from 'mongoose';
import connect from './config.js';

import sweaterRoutes from './routes/api/sweaterRoutes.js';

const app = express();

(async () => {
    try {
        const conn = await mongoose.connect(connect.MONGO_URI, {
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

//Middleware - get data from req.body in routes
app.use(express.json({ extended: false }));

//Routes
app.use('/api/sweaters', sweaterRoutes);

const PORT = 5000;

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