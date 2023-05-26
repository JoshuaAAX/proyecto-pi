import { supabase } from "../backend/client.js";

 // Configurar el cliente de Supabase
test("Prueba de conexión a Supabase", () => {
  // Realizar una prueba de conexión a Supabase
  expect(supabase).toBeTruthy();
});



test("Prueba de Registro de usuario con Supabase", async () => {

   // Datos del usuario para el registro
   const signup_user = {
        email: "prueba@correo.dot",
        password: "esunsecreto",
        options: {
          data: { nickname: "apodo", full_name: "nombre"},
        },
    }

   // Autenticar un usuario
   const {data, error} = await supabase.auth.signUp(signup_user);

   //const { response } = await supabase.from("users").insert({ nickname, full_name, email });
   
   // Verificar el resultado de la operación
   expect(data.user).toBeDefined();
   expect(data.session).toBeTruthy();
   expect(error).toBeNull();
    
});


test("Prueba de autenticación de usuario con Supabase", async () => {

    // Datos de autenticación
    const login_user = {
      email: "prueba@correo.dot",
      password: "esunsecreto",
    }
  
    // Autenticar un usuario
    const {data, error} = await supabase.auth.signInWithPassword(login_user);
  
    // Realizar una prueba de autenticación exitosa
    expect(data.user).toBeDefined();
    expect(data.session).toBeTruthy();
    expect(error).toBeNull();
  });
  
  