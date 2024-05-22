const express = require('express')
const db = require('./src/db/mongoose')
const { urlencoded } = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000

const postModal = require("./src/models/post")
app.use(express.json())
app.use(urlencoded({ extended: true }))

// Connect DB
db()
// Config cors
app.use(cors())

app.get('/:id', async (req, res) => {
    const id = req.params.id
    const result = await postModal.findById(id);
    return res.json(result)
})

app.get('/', async (req, res) => {
    const result = await postModal.find();
    return res.json(result)
})



app.post('/', async (req, res) => {
    const postReq = req.body
    const newPost = await postModal.create(postReq)
    return res.json(newPost)
})

app.put('/:id', async (req, res) => {
    const postIdReq = req.params.id
    const postRes = req.body
    const foundPost = await postModal.findByIdAndUpdate(postIdReq, postRes, { new: true })
    if (foundPost) {
        return res.json(foundPost)
    }
    else {
        return res.json({
            message: "Không tìm thấy bài post"
        })
    }
})

app.delete('/:id', async (req, res) => {
    const postIdReq = req.params.id
    const foundPost = await postModal.findByIdAndDelete(postIdReq, { new: true })
    if (foundPost) {
        return res.json({
            metadata: foundPost,
            message: "Xóa thành công"
        })
    }
    else {
        return res.json({
            message: "Không tìm thấy bài post"
        })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})