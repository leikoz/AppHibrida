function FBack(){ 		//Función para direccionar al login
	location.href = "index.html";
}

function Flog(){ 		//Funcion para direccionar al home
	location.href = "main.html";
}

function Fperfil(){		//Funcion para direccionar al perfil
	location.href = "perfil.html";
}

function FRegistrarse(){//Funcion para direccionar al formulario de registro
	location.href = "registro.html"
}

function Validar(){
	var usuario = document.getElementById("usuario").value;
	var contraseña = document.getElementById("contraseña").value;

	if(usuario=="sam" && contraseña == "123"){
		Flog();
	}
	else{
		alert("Verifique sus datos");
	}
}