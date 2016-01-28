// seems exports came from node
exports.viewProject = function(req, res)
{
  var name = req.params.name;
  console.log('the name is ' + name);
  res.render('project', {
    'projectName': name
  });
};

