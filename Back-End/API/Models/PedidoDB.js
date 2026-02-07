const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    clienteId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Usuario', // obs: deve ser o nome usado no module.exports do seu UsuarioDB
        required: true 
    },
    restauranteId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Restaurante', // obs: deve ser o nome usado no module.exports do seu RestauranteDB
        required: true 
    },
    itens: [
        {
            nome: String,
            precoUnitario: Number,
            quantidade: Number,
            subtotal: Number
        }
    ],
    total: { 
        type: Number, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['pendente', 'preparando', 'saiu para entrega', 'entregue', 'cancelado'],
        default: 'pendente' 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Pedido', PedidoSchema);