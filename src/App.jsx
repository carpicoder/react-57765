import "./css/main.css"

function App() {

  return (
    <>
      <MostrarUsuario nombre="Carpi" edad="28" />
      <MostrarUsuario nombre="Yesi" edad="29" />
      <MostrarUsuario nombre="Yesi" edad="29" />
      <MostrarUsuario nombre="Yesi" edad="29" />
      <MostrarUsuario nombre="Yesi" edad="29" />
      <MostrarUsuario nombre="Yesi" edad="29" />
      <img src="ruta" />
    </>
  )
}

function MostrarUsuario({nombre, edad}) {
  return <h1>{nombre}: {edad}</h1>;
}

export default App

