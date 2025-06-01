const mariadb = require("mariadb");

class MensagemDAO {
    constructor(pool) {
        this.pool = pool;
    }

    // Método para salvar uma nova mensagem
    async salvarMensagem(usuarioId, email, mensagem) {
        let conn;
        try {
            // Obtém uma conexão com o banco
            conn = await this.pool.getConnection();
            
            // Insere a mensagem no banco
            await conn.query(
                "INSERT INTO mensagens (usuario_id, email, mensagem) VALUES (?, ?, ?)",
                [usuarioId, email, mensagem]
            );
        } catch (error) {
            console.error("Erro ao salvar a mensagem:", error);
            throw error; // Lança o erro para que o controlador possa tratá-lo
        } finally {
            // Libera a conexão de volta para o pool
            if (conn) conn.release();
        }
    }

    // Método para buscar todas as mensagens de um usuário
    async buscarMensagensPorUsuario(usuarioId) {
        let conn;
        try {
            conn = await this.pool.getConnection();

            const resultado = await conn.query(
                "SELECT * FROM mensagens WHERE usuario_id = ?",
                [usuarioId]
            );

            return resultado;
        } catch (error) {
            console.error("Erro ao buscar as mensagens:", error);
            throw error;
        } finally {
            if (conn) conn.release();
        }
    }
}

module.exports = MensagemDAO;
