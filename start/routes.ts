import Route from "@ioc:Adonis/Core/Route";

import { authRoutes } from "./routes/auth";
import { userAuthRoutes, userNoAuthRoutes } from "./routes/user";

Route.get('/', () => console.log('bob'))

Route.group(() => {
  authRoutes()
  userAuthRoutes()
  userNoAuthRoutes()
})
  .as('user')
  .prefix('/user')

