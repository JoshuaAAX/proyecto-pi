import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import { supabase } from "../../backend/client";
import { Container } from "@mui/material";

export default function Signup() {
  const [session, setSession] = useState(null);

  const obtenerSesion = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      console.log(data);

      if (error) {
        console.warn(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cerrarSesion = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log(error);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <Container sx={{ mt: 8 }} maxWidth="sm">
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
      </Container>
    );
  } else {
    return (
      <div>
        <h1>Logged in!</h1>
        <button onClick={obtenerSesion}>Get Session</button>
        <button onClick={cerrarSesion}>Sign out</button>
      </div>
    );
  }
}
