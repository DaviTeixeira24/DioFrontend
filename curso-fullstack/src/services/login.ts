export const login = (email: string): void => {
  if (email == "") {
    alert("Email não pode ser vazio");
    return;
  }
  alert(`Bem-vindo ao sistema, ${email}!`);
};
