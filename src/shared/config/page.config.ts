class PageConfig {
    readonly HOME = '/';
    readonly AUTH = '/auth';

    readonly DASHBOARD = '/dashboard';
    readonly PLANS = this.DASHBOARD + '/plans';
    readonly ORDERS = this.DASHBOARD + '/orders';
    readonly RECIPES = this.DASHBOARD + '/recipes';
    readonly FORUM = this.DASHBOARD + '/forum';
    readonly PROFILE = this.DASHBOARD + '/profile';
}

export const PAGES = new PageConfig();  