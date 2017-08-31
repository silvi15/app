Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
Router.route('/', function () {
  // render the Home template with a custom data context
  this.layout('ApplicationLayout');
  this.render('landingPage');
});

Router.route('/register');
Router.route('/login');
Router.route('/nav');
Router.route('/header');
Router.route('/cuerpo');
Router.route('footer');
Router.route('/homePage');
Router.route('/newProject');
Router.route('/findPeople');
Router.route('/acceptProject');
Router.route('/Profile');
Router.route('/home');
Router.route('/project');
Router.route('/inbox');
Router.route('/notification');