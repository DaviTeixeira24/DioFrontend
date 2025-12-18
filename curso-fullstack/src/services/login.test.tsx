import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  const mockEmail = "exemplo@email.com";

  it("deve exibir um alert com boas vindas", () => {
    login(mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(
      `Bem-vindo ao sistema, ${mockEmail}!`
    );
  });

  it("não deve exibir o alert se o email estiver vazio", () => {
    login(mockEmail);
    expect(mockAlert).not.toHaveBeenCalledWith();
  });
});
