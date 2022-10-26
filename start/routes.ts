import Route from "@ioc:Adonis/Core/Route";

import { userAuthRoutes, userNoAuthRoutes } from "./routes/user";

Route.get('/', () => console.log('bob'))

Route.group(() => {
  userAuthRoutes()
  userNoAuthRoutes()
})
  .as('user')
  .prefix('/user')

