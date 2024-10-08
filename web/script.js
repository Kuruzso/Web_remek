const loginModal = document.getElementById("loginModal");
        const registerModal = document.getElementById("registerModal");
        const loginButton = document.querySelector(".login-button");
        const registerButton = document.querySelector(".register-button");
        const closeLogin = document.getElementById("closeLogin");
        const closeRegister = document.getElementById("closeRegister");

        loginButton.onclick = function() {
            loginModal.style.display = "block";
        }

        registerButton.onclick = function() {
            registerModal.style.display = "block";
        }

        closeLogin.onclick = function() {
            loginModal.style.display = "none";
        }

        closeRegister.onclick = function() {
            registerModal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == loginModal) {
                loginModal.style.display = "none";
            } else if (event.target == registerModal) {
                registerModal.style.display = "none";
            }
        }
        let users = [{
            Nev: "teszt",
            Email: "teszt@teszt.teszt",
            Jelszo: "teszt"
        }];
        
        function login() {
            let nev = document.getElementById("username").value;
            let jelszo = document.getElementById("password").value;
        
            let szoveg = "";
            for (let user of users) {
                if (user.Nev === nev && user.Jelszo === jelszo) {
                    szoveg = "Siker";
                    break;
                }
            }
            if (szoveg === "") {
                szoveg = "Rossz felhasználónév vagy jelszó";
            }
            alert(szoveg);
        }
        
        function reg() {
            let nev = document.getElementById("reg-username").value;
            let email = document.getElementById("reg-email").value;
            let jelszo = document.getElementById("reg-password").value;
        
            let vane = false;
            for (let user of users) {
                if (user.Nev === nev || user.Email === email) {
                    vane = true; // Ha már létezik, beállítjuk a `vane`-t igazra
                    break;
                }
            }
        
            if (!vane && nev !== "" && email.includes("@") && jelszo !== "") {
                users.push({
                    Nev: nev,
                    Email: email,
                    Jelszo: jelszo
                });
                alert("Sikeres regisztráció!");
                console.log(users);
            } else {
                alert("Sikertelen regisztráció! Már létezik!");
            }
        }
        