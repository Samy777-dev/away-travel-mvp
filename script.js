document.getElementById('formCotação').addEventListener('submit', function(event) {
    
    event.preventDefault();

        const seuNumeroTelefone = "5593991470237"; 

        const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
    const dataIdaBruta = document.getElementById('dataIda').value;
    const dataVoltaBruta = document.getElementById('dataVolta').value;
    const passageiros = document.getElementById('passageiros').value;

        function formatarDataBR(data) {
        if (!data) return '';
        const partes = data.split('-'); 
        return `${partes[2]}/${partes[1]}/${partes[0]}`; 
    }

    const dataIda = formatarDataBR(dataIdaBruta);
    const dataVolta = formatarDataBR(dataVoltaBruta);

        let mensagem = `Olá! Gostaria de fazer uma cotação de passagem aérea.%0A%0A`;
    mensagem += `*Origem:* ${origem}%0A`;
    mensagem += `*Destino:* ${destino}%0A`;
    
    if (dataIda) {
        mensagem += `*Data de Ida:* ${dataIda}%0A`;
    }
    if (dataVolta) {
        mensagem += `*Data de Volta:* ${dataVolta}%0A`;
    }
    
    mensagem += `*Passageiros:* ${passageiros}%0A%0A`;
    mensagem += `Poderia me enviar as melhores opções?`;

    
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${seuNumeroTelefone}&text=${mensagem}`;

        window.open(urlWhatsApp, '_blank');
});