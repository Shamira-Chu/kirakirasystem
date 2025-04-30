
  document.getElementById("botaoCompra").addEventListener("click", function () {
    let quantidadeIngressos = parseInt(document.getElementById("numIngressos").value);
    console.log("Quantidade selecionada:", quantidadeIngressos);
    sorteioIngressos(quantidadeIngressos); // <<< passa o valor aqui
  });

  function sorteioIngressos(quantidadeIngressos) { // <<< recebe aqui
    const ingressos = {
      normal: 50,
      vip: 100,
      premium: 200
    };

    const descontos = {
      estudante: 0.5,
      fanClube: 0.1
    };

    const nomeExposicao = "Exposição de Cultura Pop";
    const dataExposicao = "25 de Abril de 2025";
    const horarioExposicao = "18:00";

    let totalFinal = 0;

    console.log("=== Dados da Exposição ===");
    console.log("Nome da Exposição: " + nomeExposicao);
    console.log("Data: " + dataExposicao);
    console.log("Horário: " + horarioExposicao);
    console.log("Quantidade de Ingressos: " + quantidadeIngressos);
    console.log("-----------");

    for (let i = 1; i <= quantidadeIngressos; i++) {
      let tipoSorteado = Math.floor(Math.random() * 3);
      let tipoSelecionado;
      if (tipoSorteado === 0) tipoSelecionado = "Normal";
      else if (tipoSorteado === 1) tipoSelecionado = "VIP";
      else tipoSelecionado = "Premium";

      let precoBase = ingressos[tipoSelecionado.toLowerCase()];

      let aplicarDesconto = Math.floor(Math.random() * 2);
      let descontoAplicado = 0;
      let descricaoDesconto = "Nenhum desconto";

      if (aplicarDesconto === 1) {
        let tipoDesconto = Math.floor(Math.random() * 2);
        if (tipoDesconto === 0) {
          descontoAplicado = descontos.estudante;
          descricaoDesconto = "Desconto Estudante (50%)";
        } else {
          descontoAplicado = descontos.fanClube;
          descricaoDesconto = "Desconto Fã-Clube (10%)";
        }
      }

      let precoFinal = precoBase - (precoBase * descontoAplicado);
      totalFinal += precoFinal;

      console.log("Ingresso #" + i);
      console.log("Tipo: " + tipoSelecionado);
      console.log("Preço Unitário: R$ " + precoBase.toFixed(2));
      console.log("Desconto Aplicado: " + descricaoDesconto);
      console.log("Preço Final: R$ " + precoFinal.toFixed(2));
      console.log("-----------");
    }

    console.log("Total a Pagar pelos " + quantidadeIngressos + " ingressos: R$ " + totalFinal.toFixed(2));
  }

