function member(name, email, graduation) {
  this.name = name;
  this.email = email;
  this.graduation = graduation;
}

function freq_(date, wasAt, content) {
  this.date = date;
  this.wasAt = wasAt;
  this.content = content;
}

function grade(title, grade, weight, date) {
  this.title = title;
  this.grade = grade;
  this.weight = weight;
  this.date = date;
}

function book(title, author, year, link) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.link = link;
}

const disciplinas = 
   [
        {
          department: 'INF',
          area: 'Departamento de Informática Teórica',
          credits: 4,
          when: 'terça-feira das 08h até 12h e quarta-feira das 08h até 12h',
          code: 'INF0000',
          title: 'Programação 1',
          group: 'Turma A',
          teacher: 'Professor A',
          members: [
            new member('Professor A', 'professor.a@ufrgs.br', '-'),
            new member('Aluno A', 'aluno.a@ufrgs.br', 'Ciência da Computação'),
            new member('Aluno B', 'aluno.b@ufrgs.br', 'Ciência da Computação'),
            new member('Aluno C', 'aluno.c@ufrgs.br', 'Engenharia da Computação'),
            new member('Aluno D', 'aluno.d@ufrgs.br', 'Ciência da Computação'),
          ],
          freq: [
            new freq_('01/01/2022', true, 'Conteúdo 1'),
            new freq_('02/01/2022', true, 'Conteúdo 2'),
            new freq_('03/01/2022', true, 'Conteúdo 3'),
            new freq_('04/01/2022', true, 'Conteúdo 4'),
            new freq_('04/01/2022', false, 'Conteúdo 5'),
          ],
          grades: [
            new grade('Prova 1', 6, 2.5, '01/01/2022'),
            new grade('Prova 2', 7, 2.5, '02/01/2022'),
            new grade('Prova 3', 5, 2.5, '03/01/2022'),
            new grade('Prova 4', 10, 2.5, '04/01/2022'),
          ],
          bibliography: [
            new book('Livro 1', 'Autor 1', 2005, ''),
            new book('Livro 2', 'Autor 2 & Autor 3', 2007, 'livro2'),
            new book('Livro 3', 'Autor 4', 2009, 'livro3'),
            new book('Livro 4', 'Autor 5', 20010, 'livro4'),
          ]
        },
        {
          department: 'INF',
          area: 'Departamento de Informática Aplicada',
          credits: 2,
          when: 'segunda-feira das 08h até 12h',
          code: 'INF0001',
          title: 'Programação 2',
          group: 'Turma B',
          teacher: 'Professor B',
          members: [
            new member('Professor B', 'professor.b@ufrgs.br', '-'),
            new member('Aluno X', 'aluno.x@ufrgs.br', 'Ciência da Computação'),
            new member('Aluno Y', 'aluno.y@ufrgs.br', 'Ciência da Computação'),
            new member('Aluno Z', 'aluno.z@ufrgs.br', 'Engenharia da Computação'),
            new member('Aluno W', 'aluno.w@ufrgs.br', 'Engenharia da Computação'),
           
          ],
          freq: [
            new freq_('01/01/2022', true, 'Conteúdo 1'),
            new freq_('02/01/2022', true, 'Conteúdo 2'),
            new freq_('03/01/2022', false, 'Conteúdo 3'),
            new freq_('04/01/2022', true, 'Conteúdo 4'),
            new freq_('04/01/2022', false, 'Conteúdo 5'),
            new freq_('04/01/2022', false, 'Conteúdo 6'),
          ],
          grades: [
            new grade('Prova 1', 8, 2.5, '01/01/2022'),
            new grade('Prova 2', 7, 2.5, '02/01/2022'),
            new grade('Trabalho 1', 8, 2.5, '03/01/2022'),
            new grade('Prova 4', 8, 2.5, '04/01/2022'),
          ],
          bibliography: [
            new book('Livro A', 'Autor 1', 2012, 'livroa'),
            new book('Livro B', 'Autor 3', 2011, 'livrob'),
            new book('Livro C', 'Autor 4', 2009, 'livroc'),
          ]
        },
        {
          department: 'INF',
          area: 'Departamento de Informática Aplicada',
          credits: 4,
          when: 'segunda-feira das 13h até 15h e quarta-feira das 13h até 15h',
          code: 'INF0002',
          title: 'Programação 3',
          group: 'Turma C',
          teacher: 'Professor C',
          members: [
            new member('Professor C', 'professor.c@ufrgs.br', '-'),
            new member('Aluno F', 'aluno.f@ufrgs.br', 'Engenharia da Computação'),
            new member('Aluno G', 'aluno.g@ufrgs.br', 'Ciência da Computação'),
            new member('Aluno H', 'aluno.h@ufrgs.br', 'Engenharia da Computação'),
            new member('Aluno I', 'aluno.i@ufrgs.br', 'Ciência da Computação'),
           
          ],
          freq: [
            new freq_('01/01/2022', true, 'Conteúdo 1'),
            new freq_('02/01/2022', true, 'Conteúdo 2'),
            new freq_('03/01/2022', true, 'Conteúdo 3'),
          ],
          grades: [
            new grade('Trabalho 1', 7.5, 2.5, '01/01/2022'),
            new grade('Trabalho 2', 7, 2.5, '02/01/2022'),
            new grade('Prova 1', 3, 2.5, '03/01/2022'),
            new grade('Prova 2', 10, 2.5, '04/01/2022'),
          ],
          bibliography: [
            new book('Livro X', 'Autor A', 2015, 'livrox'),
            new book('Livro Y', 'Autor B', 2017, 'livroy'),
            new book('Livro Z', 'Autor C', 2002, 'livroz'),
            new book('Livro W', 'Autor D', 2001, 'livrow'),
          ]
        },
        {
          department: 'INF',
          area: 'Departamento de Informática Teórica',
          credits: 4,
          when: 'terça-feira das 13h até 15h e quinta-feira das 13h até 15h',
          code: 'INF0003',
          title: 'Programação 4',
          group: 'Turma D',
          teacher: 'Professor D',
          members: [
            new member('Professor D', 'professor.d@ufrgs.br', '-'),
            new member('Aluno A', 'aluno.a@ufrgs.br', 'Ciência da Computação'),
            new member('Aluno B', 'aluno.b@ufrgs.br', 'Ciência da Computação'),
            new member('Aluno F', 'aluno.c@ufrgs.br', 'Engenharia da Computação'),
            new member('Aluno D', 'aluno.d@ufrgs.br', 'Ciência da Computação'),
            
          ],
          freq: [
            new freq_('01/01/2022', true, 'Conteúdo 1'),
            new freq_('02/01/2022', true, 'Conteúdo 2'),
            new freq_('03/01/2022', false, 'Conteúdo 3'),
            new freq_('01/01/2022', false, 'Conteúdo 4'),
            new freq_('02/01/2022', false, 'Conteúdo 5'),
            new freq_('03/01/2022', false, 'Conteúdo 6'),
          ],
          grades: [
            new grade('Prova 1', 8, 2.5, '01/01/2022'),
            new grade('Trabalho 1', 9.5, 2.5, '02/01/2022'),
            new grade('Prova 2', 2, 2.5, '03/01/2022'),
            new grade('Prova 3', 7, 2.5, '04/01/2022'),
          ],
          bibliography: [
            new book('Livro G', 'Autor G', 2002, 'livrog'),
            new book('Livro H', 'Autor H', 2005, 'livroh'),
            new book('Livro I', 'Autor I e Autor J', 2001, 'livroi'),
            new book('Livro J', 'Autor K', 1997, 'livroj'),
          ]
        }
      ];

const getDate = hoursOffset => {
    let current = new Date();
    current.setHours(current.getHours() + hoursOffset);
    return current;
}



const eventos =   [
    {
      'title': 'Prova 1 - INF0000',
      'bgColor': '#ff7f50',
      'start': getDate(0),
      'end': getDate(1)
    },
    {
      'title': 'Prova 2 - INF0001',
      'start': getDate(2),
      'end': getDate(3)
    },
  
    {
      'title': 'Prova 3 - INF0002',
      'bgColor': '#dc143c',
      'start': getDate(22),
      'end': getDate(23)
    },
  
    {
      'title': 'Prova 4 - INF0003',
      'bgColor': '#ff8c00',
      'start': getDate(24),
      'end': getDate(25)
    },
  ];


const getDisciplinas = () => {
    return disciplinas;
}

const getEventos = () => {
    return eventos;
}

const getByCode = code => {
  for (let i = 0; i < disciplinas.length; i++) {
    if (disciplinas[i].code === code) {
      return disciplinas[i]
    };
  }

  return disciplinas[0];
}

module.exports = { getDisciplinas, getEventos, getByCode };