import Route from "@ioc:Adonis/Core/Route";

import { userAuthRoutes, userNoAuthRoutes } from "./routes/user";

Route.group(() => {
  userAuthRoutes()
  userNoAuthRoutes()
})
  .as('user')
  .prefix('/user')

