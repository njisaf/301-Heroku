(function(module) {
  var repos = {};

  repos.all = [];

  // TODO: Refactor and simplify this ajax call into a get request
  // to the proxy end point provided by server.js.
  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'github/user/repos',
      type: 'GET',
      success: function(data) {
        console.log(data);
        repos.all = data;
      },
    }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
