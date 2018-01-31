const Koa = require('koa')
const multer = require('koa-multer')
var Jimp = require("jimp");
const fs = require('fs')

const upload = multer({ dest: 'upload/' })

const app = new Koa()

app.use(async (ctx,) => {
await upload.single('file')(ctx)
const tempFile = ctx.req.file.path
const outFile = tempFile + '.jpg'
Jimp.read(tempFile).then(function (lenna) {
    lenna.resize(256, 256)            // resize
         .quality(60)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write(outFile);             // save        
})
ctx.body = outFile
})

app.listen(3000)