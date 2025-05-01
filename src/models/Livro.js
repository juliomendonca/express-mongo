import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    titulo: { type: mongoose.Schema.Types.String, required: true },
    editora: { type: mongoose.Schema.Types.String },
    preco: { type: mongoose.Schema.Types.Double },
    paginas: { type: mongoose.Schema.Types.Int32 }
}, {
    versionKey: false
});

const livro = mongoose.model("livros", livroSchema);

export default livro;