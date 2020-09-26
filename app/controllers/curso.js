var cursos = [
  {
    _id: 1,
    nome: 'Análise e Desenvolvimento de Sistemas',
    email: 'thiago.homem@ifsp.edu.br',
  },
  { _id: 2, nome: 'Letras', email: 'teresa.lombardi@ifsp.edu.br' },
  {
    _id: 3,
    nome: 'Engenharia de Produção',
    email: 'felipe.basile@ifsp.edu.br',
  },
  { _id: 4, nome: 'Administração', email: 'rita.moreira@ifsp.edu.br' },
];

module.exports = function () {
  const controller = {};
  controller.listaCursos = function (req, res) {
    res.json(cursos);
  };
  controller.obtemCursos = function (req, res) {
    console.log('Curso selecionado: ' + req.params.id);
    const { id } = req.params;
    const curso = cursos.filter(function (curso) {
      return curso._id == id;
    })[0];
    curso ? res.json(curso) : res.status(404).send('Curso não encontrado :(');
  };
  controller.removeCurso = function (req, res) {
    const { id } = req.params;
    cursos = cursos.filter(function (curso) {
      return curso._id != id;
    });
    res.status(204).send('Curso deletado').end();
  };
  return controller;
};
