import { useState } from "react"

const OpcaoPagamento = (handleInputChange) => {
    const [opcaoPagamento, setOpcaoPagamento] = useState('');

    const handleOpcaoPagamento = (event) => {
        const value = event.target.value;
        setOpcaoPagamento(value);

        if (value === 'op1') {
            // Se 'Sim' é selecionado, atribui 'Pago'
            handleInputChange({ target: { name: 'pagamento', value: 'Pago' } });
        } else {
            // Se 'Não' é selecionado, atribui 'Não Pago'
            handleInputChange({ target: { name: 'pagamento', value: 'Não Pago' } });
        }
    }
    const resetOpcaoPagamento = () => {
        setOpcaoPagamento('');
    }

    return {
        opcaoPagamento,
        handleOpcaoPagamento,
        resetOpcaoPagamento
    };
}

export default OpcaoPagamento;



