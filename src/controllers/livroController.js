import livro from "../models/Livro.js";

class LivroController {
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const livroEncontrado = await livro.findById(req.params.id);
            if (!livroEncontrado) {
                return res.status(404).send("Livro não encontrado");
            }
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Livro cadastrado com sucesso", livro: novoLivro });
        } catch (error) {
            res.status(500).json({ message: `Erro ao cadastrar livro: ${error.message}` });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const livroAtualizado = await livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!livroAtualizado) {
                return res.status(404).send("Livro não encontrado");
            }
            res.status(200).json(livroAtualizado);
        } catch (error) {
            res.status(500).json({ message: `Erro ao atualziar livro: ${error.message}` });
        }
    }

    static async excluirLivro(req, res) {
        try {
            const livroExcluido = await livro.findByIdAndDelete(req.params.id);
            if (!livroExcluido) {
                return res.status(404).send("Livro não encontrado");
            }
            res.status(200).send("Livro removido com sucesso");
        } catch (error) {
            res.status(500).json({ message: `Erro ao excluir livro: ${error.message}` });
        }
    }
}

export default new LivroController();