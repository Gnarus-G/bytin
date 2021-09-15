export class Route {
  static readonly HOME  = new Route('/', 'Home');
  static readonly PUBLIC_SNIPPETS  = new Route('/snippets/public', "Public Snippets");
  static readonly PRIVATE_SNIPPETS  = new Route('/snippets/private', "Private Snippets");
  static readonly ADD_SNIPPETS = new Route('/snippets/add', "Add a snippet");
  static readonly LOGIN = new Route('/api/auth/signin', "Login");
  static readonly LOGOUT = new Route('/api/auth/signout', "Register");

  private constructor(public readonly path: string, public readonly desc: any) {
  }

} 