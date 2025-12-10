import { soma } from "./soma";

describe("soma", () => {
  it("deve retornar a soma de dois números positivos", () => {
    const resultado = soma(2, 3); //arrange e act(ordem dos fatores)
    expect(resultado).toBe(5); //assert
  });
});
