const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
const uploadImage = async (imagePath) => {

    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    }
    try {
        const result = await cloudinary.uploader.upload(imagePath, options)
        console.log(result.url)

    } catch (error) {
        console.error("error")
    }
}
app.post("/api/cloudinary",(err,res)=>{
    let imagePath = __dirname + '/pic.jpeg'
    uploadImage(imagePath)
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})

