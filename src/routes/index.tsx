import { BrowserRouter } from "react-router-dom"
import { MainRoutes } from "./main.routes"

export const Routes = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  )
}