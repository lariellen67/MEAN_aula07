angular
  .module('ifsp')
  .controller('ContatoController', function ($scope, $routeParams, $resource) {
    const Contato = $resource('contatos/:id');
    Contato.get(
      { id: $routeParams.contatoId },
      function (contato) {
        $scope.contato = contato;
      },
      function (error) {
        $scope.mensagem = { texto: 'Não foi possivel obter o contato' };
        console.log($routeParams.contatoId);
        console.error(error);
      }
    );
  });
