import { List, ListPlus, Receipt } from  '@phosphor-icons/react'

export const navLinks = [

    {
        id: 1,
        label: 'Pedido',
        path: '/admin/pedidos',
        icon: <Receipt />
    },

      {
        id: 2,
        label: 'Produto',
        path: '/admin/produtos',
        icon: <List />
    },

      {
        id: 3,
        label: 'Adicionar Produto',
        path: '/admin/novo-produto',
        icon: <ListPlus />
    },

    
];