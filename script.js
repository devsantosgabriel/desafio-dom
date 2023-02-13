function enviar() {
    let usuario = document.getElementById("login").value
    let senha = document.getElementById("senha").value

    if (usuario == "admin" && senha == "admin") {
        alert('Login realizado com sucesso')
        location.href = "home.html";
    } else {
        alert('Usuário e/ou senha incorretos')
    };
};