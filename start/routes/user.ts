import Route from "@ioc:Adonis/Core/Route";

export function userNoAuthRoutes(): void {
  Route.group(() => {
    Route.post('/register', 'UsersController.create')
      .as('register')
      .middleware('checkRegisReq')
  })
}

export function userAuthRoutes(): void {
  Route.group(() => {
    Route.get('profile', '').as('profile')
    Route.patch('update', '').as('update')
    Route.delete('delete', '').as('delete')
  })
}


