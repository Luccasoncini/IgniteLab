import { ApolloProvider } from "@apollo/client"
import { MenuProvider } from "./hooks/useMenu"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"
import { Router } from "./router"

function App() {
  return (
    <MenuProvider>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </MenuProvider>
  )
}

export default App
