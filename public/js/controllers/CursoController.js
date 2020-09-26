angular
  .module('ifsp')
  .controller('CursoController', function ($scope, $routeParams, $resource) {
    const Curso = $resource('cursos/:id');
    Curso.get(
      { id: $routeParams.cursoId },
      function (curso) {
        $scope.curso = curso;
      },
      function (error) {
        $scope.mensagem = { texto: 'Não foi possivel obter o curso' };
        console.log($routeParams.cursoId);
        console.error(error);
      }
    );
  });
