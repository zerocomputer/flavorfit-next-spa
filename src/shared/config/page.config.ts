class PageConfig {
    readonly HOME = '/';

    private readonly AUTH = '/auth';
    readonly SIGN_IN = this.AUTH + '/signIn';
    readonly SIGN_UP = this.AUTH + '/signUp';
}

export const PAGES = new PageConfig();  