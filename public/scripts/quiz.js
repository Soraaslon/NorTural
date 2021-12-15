;(function () {
  var allQuestions = [
    {
      question:
        'Qual o cantor nasceu no município Exu do estado de Pernambuco ?',
      option0: 'Luiz Gonzaga ',
      option1: 'Zé Ramalho',
      option2: 'Alceu Valença',
      option3: ' Elba Ramalho ',
      answer: 0,
      theme: 0
    },
    {
      question: 'Estilos musicais predominantes do nordeste.',
      option0: 'Xaxado, axé e pop',
      option1: 'Xote,forró e funk',
      option2: 'Baião, xote e piseiro',
      option3: 'Baião, xote e xaxado',
      answer: 3,
      theme: 0
    },
    {
      question: 'Quais compositores e cantores da música “Morena Tropicana”?',
      option0: 'Luiz Gonzaga, Alceu Valença',
      option1: 'Vicente Barreto e Zé Ramalho',
      option2: 'Alceu Valença e Vicente Barreto',
      option3: 'Luiz Gonzaga e Dominguinhos',
      answer: 2,
      theme: 0
    },
    {
      question:
        'Qual prato típico ganhou origem e popularidade devido a parceira do compositor cearense Humberto Teixeira com o pernambucano Luís Gonzaga em uma música?',
      option0: 'Baião de dois',
      option1: 'Mocotó',
      option2: 'Acarajé',
      option3: 'Vatapá',
      answer: 0,
      theme: 1
    },
    {
      question: 'Quais as frutas mais populares na Bahia?',
      option0: 'Acerola e pitomba ',
      option1: 'Graviola e cajá',
      option2: 'Pinha e cajú',
      option3: 'Carambola e pitomba',
      answer: 3,
      theme: 1
    },
    {
      question: 'Qual é a cidade em que o sol nasce primeiro?',
      option0: 'Aracaju',
      option1: 'João Pessoa',
      option2: 'Fortaleza',
      option3: 'São Luís',
      answer: 1,
      theme: 2
    },
    {
      question: 'Qual é o maior estado da região nordeste?',
      option0: 'Bahia',
      option1: 'Sergipe',
      option2: 'Piauí',
      option3: 'Maranhão',
      answer: 0,
      theme: 2
    },
    {
      question: 'Quais as plantas mais encontradas na região nordeste?',
      option0: 'Palmeiras, cacto e bromélias',
      option1: 'Bromélias, camboatá e orquídeas',
      option2: 'Cajueiro, cacto e barriguda',
      option3: 'Aroeiras-vermelhas, bromélias e cacto',
      answer: 2,
      theme: 2
    },
    {
      question: 'Qual a principal festa do Nordeste?',
      option0: 'Carnaval',
      option1: 'São João',
      option2: 'Bumba meu boi',
      option3: 'Festa de Iemanjá',
      answer: 0,
      theme: 3
    },
    {
      question:
        'A festa típica Micaretas da região Nordeste que é realizada na época do Natal, ocorre em quais cidades?',
      option0: 'Fortaleza, Natal e Aracaju',
      option1: 'São Luís, Natal e Salvador',
      option2: 'Aracaju, Maceió e Teresina',
      option3: 'Caruaru, João Pessoa e Fortaleza',
      answer: 0,
      theme: 3
    }
    // ,{
    //   question: 'Non Metal that remains liquid at room temprature is',
    //   options: ['Phophorous', 'Bromine', 'Clorine', 'Helium'],
    //   answer: 1
    // }
    //,{
    //   question: "Which of the following is used in Pencils ?",
    //   options: ["Graphite", "Silicon", "Charcoal", "Phosphorous"],
    //   answer: 0
    // }, {
    //   question: "Chemical formula of water ?",
    //   options: ["NaA1O2", "H2O", "Al2O3", "CaSiO3"],
    //   answer: 1
    // },{
    //   question: "The gas filled in electric bulb is ?",
    //   options: ["Nitrogen", "Hydrogen", "Carbon Dioxide", "Oxygen"],
    //   answer: 0
    // },{
    //   question: "Whashing soda is the comman name for",
    //   options: ["Sodium Carbonate", "Calcium Bicarbonate", "Sodium Bicarbonate", "Calcium Carbonate"],
    //   answer: 0
    // },{
    //   question: "Which gas is not known as green house gas ?",
    //   options: ["Methane", "Nitrous oxide", "Carbon Dioxide", "Hydrogen"],
    //   answer: 3
    // },{
    //   question: "The hardest substance availabe on earth is",
    //   options: ["Gold", "Iron", "Diamond", "Platinum"],
    //   answer: 2
    // },{
    //   question: "Used as a lubricant",
    //   options: ["Graphite", "Silica", "Iron Oxide", "Diamond"],
    //   answer: 0
    //   }
  ]
  /*
  try {
    var allQuestions = []
    
    var x = $('#capturaLeng').text()
    for (i = 0; i < x; i++) {
      ans = $('#capturaAns-' + i).text()
      allQuestions[i] = {
        question: (quest = $('#capturaQuest-' + i).text()),
        option0: (opt0 = $('#capturaOp0-' + i).text()),
        option1: (opt1 = $('#capturaOp1-' + i).text()),
        option2: (opt2 = $('#capturaOp2-' + i).text()),
        option3: (opt3 = $('#capturaOp3-' + i).text()),
        answer: parseInt(ans)
      }
    }
  } catch (error) {
    console.log(error)
    alert('Deu ruim')
  }*/
  var quesCounter = 0
  var selectOptions = []
  var quizSpace = $('#quiz')

  $('#avise').hide()
  $('#sugestao-0').hide()
  $('#sugestao-1').hide()
  $('#sugestao-2').hide()
  $('#sugestao-3').hide()

  $('.result-final').hide()
  nextQuestion()

  $('#next').click(function () {
    chooseOption()
    if (isNaN(selectOptions[quesCounter])) {
      $('#next').attr('disabled', true)
      $('#avise').fadeIn(1000)
      setTimeout(function () {
        $('#avise').fadeOut(1000)
      }, 2000)
      setTimeout(function () {
        $('#next').attr('disabled', false)
      }, 2000)
    } else {
      // // if(selectOptions[quesCounter] === allQuestions[quesCounter].answer){
      // //   $('#label'+selectOptions[quesCounter]).css("background-color","blue").delay(1000);
      // }
      $('#next').attr('disabled', true)
      quesCounter++
      nextQuestion()
      setTimeout(function () {
        $('#next').attr('disabled', false)
      }, 800)
    }
  })

  $('#prev').click(function () {
    $('#prev').attr('disabled', true)
    chooseOption()
    quesCounter--
    nextQuestion()
    setTimeout(function () {
      $('#prev').attr('disabled', false)
    }, 800)
  })

  function createElement(index) {
    var element = $('<div>', { id: 'question' })
    var header = $(
      '<p id="num">' + (index + 1) + '/' + allQuestions.length + '</p>'
    )
    element.append(header)

    var question = $('<p id="question-present">').append(
      allQuestions[index].question
    )
    element.append(question)

    var radio = radioButtons(index)
    element.append(radio)

    return element
  }

  function radioButtons(index) {
    var radioItems = $('<ul>')
    var item
    var input = ''

    for (var i = 0; i < 4; i++) {
      item = $('<li>')
      input =
        '<input id=' + i + ' type="radio" name="answer" value=' + i + ' />'
      if (i == 0) {
        input +=
          '<label class="option-answer" id="label' +
          i +
          '" for=' +
          i +
          '>' +
          allQuestions[index].option0 +
          '</label>'
      }
      if (i == 1) {
        input +=
          '<label class="option-answer" id="label' +
          i +
          '" for=' +
          i +
          '>' +
          allQuestions[index].option1 +
          '</label>'
      }
      if (i == 2) {
        input +=
          '<label class="option-answer" id="label' +
          i +
          '" for=' +
          i +
          '>' +
          allQuestions[index].option2 +
          '</label>'
      }
      if (i == 3) {
        input +=
          '<label class="option-answer" id="label' +
          i +
          '" for=' +
          i +
          '>' +
          allQuestions[index].option3 +
          '</label>'
      }
      item.append(input)
      radioItems.append(item)
    }
    return radioItems
  }

  function chooseOption() {
    selectOptions[quesCounter] = +$('input[name="answer"]:checked').val()
  }

  function nextQuestion() {
    quizSpace.fadeOut(function () {
      $('#question').remove()
      if (quesCounter < allQuestions.length) {
        var nextQuestion = createElement(quesCounter)
        quizSpace.append(nextQuestion).fadeIn()
        if (!isNaN(selectOptions[quesCounter])) {
          $('input[value=' + selectOptions[quesCounter] + ']').prop(
            'checked',
            true
          )
        }
        if (quesCounter === 1) {
          $('#prev').show()
        } else if (quesCounter === 0) {
          $('#prev').hide()
          $('#next').show()
        }
      } else {
        var scoreRslt = displayResult()
        quizSpace.append(scoreRslt).fadeIn()
        $('#next').hide()
        $('#prev').hide()
      }
    })
  }

  function displayResult() {
    var score = $('<p>', { id: 'question' })
    var correct = 0
    for (var i = 0; i < selectOptions.length; i++) {
      if (selectOptions[i] === allQuestions[i].answer) {
        correct++
      } else {
        $('#sugestao-' + allQuestions[i].theme).show()
      }
      if (correct == selectOptions.length) {
        $('#com-base').text('Você acertou tudo, parabéns!')
      }
    }
    // score.append('You scored ' + correct + ' out of ' +allQuestions.length);
    $('.quiz-all').hide()
    $('.result-final').show()
    $('#pontuacao').append(correct + ' / ' + allQuestions.length)
    // return score;
  }
})()
