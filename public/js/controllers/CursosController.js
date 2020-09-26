angular
  .module('ifsp')
  .controller('CursosController', function ($scope, $resource) {
    $scope.cursos = [];
    $scope.filtro = '';
    $scope.mensagem = { texto: '' };

    const Curso = $resource('/cursos/:id');

    function buscarCursos() {
      Curso.query(
        function (cursos) {
          $scope.cursos = cursos;
          $scope.mensagem = {};
        },
        function (error) {
          console.log('Não foi possivel carregar os cursos');
          $scope.mensagem = {
            texto: 'Não foi possivel objer a lista de cursos',
          };
          console.error(error);
        }
      );
    }
    buscarCursos();

    $scope.remove = function (curso) {
      console.log(curso);
      Curso.delete({ id: curso._id }, buscarCursos, function (error) {
        console.log('Não foi possivel remover o curso');
        console.error(error);
      });
    };
  });
