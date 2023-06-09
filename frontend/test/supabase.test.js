const { createClient } = require('@supabase/supabase-js');

// Configurar el cliente de Supabase

const supabase = createClient(
  "https://zjqmreuhjdezydattxvf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqcW1yZXVoamRlenlkYXR0eHZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNzk0MTQsImV4cCI6MTk5OTg1NTQxNH0.DPk3VbiLCJWxNbQtrIV7EYAnz93tNknqumoORyX7yTk"
);

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
      data: { nickname: "apodo", full_name: "nombre" },
    },
  };

  // Autenticar un usuario
  const { data, error } = await supabase.auth.signUp(signup_user);

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
  };

  // Autenticar un usuario
  const { data, error } = await supabase.auth.signInWithPassword(
    login_user
  );

  // Realizar una prueba de autenticación exitosa
  expect(data.user).toBeDefined();
  expect(data.session).toBeTruthy();
  expect(error).toBeNull();
});

test("Prueba de actualizar de usuario con Supabase", async () => {
  // Datos de actualizacion
  const nick = "andresito";
  const name = "andres ortega";
  const email = "prueba@correo.dot";

  // Actualizar un usuario
  const { data, error } = await supabase
      .from('users')
      .update({ nickname: nick, full_name: name })
      .eq('email', email)


  expect(error).toBeNull();
});
