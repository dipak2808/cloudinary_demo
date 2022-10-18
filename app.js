const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "dzw0z2pdt",
    api_key:'376979466575456',
    api_secret:'0VaSnXNy4SRRBx1_JEkv_69oB0Q'
});
const uploadImage = async (imagePath) => {

    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    }
    try {
        const result = await cloudinary.uploader.upload(imagePath, options)
        console.log(result)

    } catch (error) {
        console.error(error)
    }
}
uploadImage(__dirname + '/pic.jpeg')
const result = cloudinary.image('pic.jpeg')
console.log(result)

app.listen(3000, () => {
    console.log('listening on port 3000')
})

