import Route from "@ioc:Adonis/Core/Route";

export function authRoutes(): void {
  Route.group(() => {
    Route.post('/login', 'AuthController.login')
      .as('login')
      .middleware('checkDatabase')
  })
}
