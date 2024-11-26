function funcaoInterna() {
    throw new Error("Erro lançado no bloco interno!");
  }
  
  try {
    console.log("Bloco externo iniciado.");
  
    try {
      console.log("Bloco interno iniciado.");
      funcaoInterna();
    } catch (errorInterno) {
      console.error("Erro capturado no bloco interno:", errorInterno.message);
      throw new Error("Erro propagado pelo bloco interno!");
    }
  
  } catch (errorExterno) {
    console.error("Erro capturado no bloco externo:", errorExterno.message);
  }
  
  console.log("Execução continua após os blocos try...catch.");
  