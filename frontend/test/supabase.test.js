const { createClient } = require("@supabase/supabase-js");
require('dotenv').config({path: '../.env.local'})

 // Configurar el cliente de Supabase

 const supabaseUrl = "https://zjqmreuhjdezydattxvf.supabase.co"
 const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqcW1yZXVoamRlenlkYXR0eHZmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NDI3OTQxNCwiZXhwIjoxOTk5ODU1NDE0fQ.uNjw-coYE9ZZqSn8kBXYu_H7uzTOLrxFj_n0pLT9_EA"
 const supabase = createClient(supabaseUrl, supabaseKey);


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
  