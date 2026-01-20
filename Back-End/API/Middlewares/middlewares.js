const fs = require('fs');
const path = require('path');

module.exports = {
    // SEGURANÇA: Diferencia Super ADM de Dono via Header
    SuperAdmin(req, res, next) {
        const userRole = req.headers['user-role'];

        if (userRole === 'super-adm') {
            // Se for ADM, vamos registrar a ação num log antes de seguir
            const logMessage = `[${new Date().toISOString()}] ADM acessou: ${req.method} ${req.url}\n`;
            fs.appendFileSync(path.join(__dirname, 'admin_actions.log'), logMessage);
            
            return next(); // <- extremamente importante, sem isso ele nao avança para os controllers e fica "pendurado"
        }

        return res.status(403).json({ erro: "Acesso negado: Requer Super ADM." });
    },

    // valindo o ID do dono do restaurante
    RestauranteDono(req, res, next) {
        const restauranteId = req.params.restauranteId;

        if (!restauranteId) {
            return res.status(400).json({ erro: "ID do restaurante é obrigatório na URL." });
        }
        
        next();
    },


    // garantindo que seu front vai receber tudo que  (JSON)
    EstruturaRestaurante(req, res, next) {
       const { name, slug, address, horasAbertura } = req.body;

        if (!name || !slug || !address || !horasAbertura) {
            return res.status(400).json({ 
                erro: "Estrutura inválida" 
            });

        next();
        }
    }
 }