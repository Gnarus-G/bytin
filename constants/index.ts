export class Route {
  static readonly HOME  = new Route('/', 'Home');
  static readonly TOS = new Route('/tos', 'Terms of Service');
  static readonly PRIVACY  = new Route('/privacy', 'Privacy policy');
  static readonly ABOUT  = new Route('/about', "About Bytin'");
  static readonly PUBLIC_SNIPPETS  = new Route('/snippets/public', "Public Snippets");
  static readonly PRIVATE_SNIPPETS  = new Route('/snippets/private', "Private Snippets");
  static readonly ADD_SNIPPETS = new Route('/snippets/add', "Add a snippet");
  static readonly LOGIN = new Route('/login', "Login");
  static readonly REGISTER = new Route('/register', "Register");
  static readonly LOGOUT = new Route('/logout', "Register");
  static readonly RESET_PASSWORD = new Route('/reset-password', "Reset password");

  private constructor(public readonly path: string, public readonly desc: any) {
  }

} 