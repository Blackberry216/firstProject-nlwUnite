let participantes = [
  {
    nome: "Agenor Moraes",
    email: "Agenor@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataChekIn: null
  },
  {
    nome: "Tharsyla",
    email: "Tharsyla@gmail.com",
    dataInscricao: new Date(2024, 2, 21, 18, 20),
    dataChekIn: null
  },
  {
    nome: "João Silva",
    email: "joao.silva@example.com",
    dataInscricao: new Date(2024, 1, 15, 10, 45),
    dataChekIn: null
  },
  {
    nome: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    dataInscricao: new Date(2024, 2, 5, 14, 30),
    dataChekIn: null
  },
  {
    nome: "Pedro Santos",
    email: "pedro.santos@example.com",
    dataInscricao: new Date(2024, 2, 12, 9, 10),
    dataChekIn: new Date(2024, 2, 18, 10, 20)
  },
  {
    nome: "Ana Souza",
    email: "ana.souza@example.com",
    dataInscricao: new Date(2024, 1, 28, 17, 45),
    dataChekIn: new Date(2024, 2, 5, 19, 0)
  },
  {
    nome: "Carlos Ferreira",
    email: "carlos.ferreira@example.com",
    dataInscricao: new Date(2024, 1, 20, 11, 0),
    dataChekIn: new Date(2024, 2, 1, 13, 10)
  },
  {
    nome: "Mariana Costa",
    email: "mariana.costa@example.com",
    dataInscricao: new Date(2024, 1, 10, 8, 20),
    dataChekIn: new Date(2024, 1, 18, 9, 30)
  },
  {
    nome: "Lucas Pereira",
    email: "lucas.pereira@example.com",
    dataInscricao: new Date(2024, 1, 25, 15, 50),
    dataChekIn: new Date(2024, 2, 3, 17, 0)
  },
  {
    nome: "Juliana Santos",
    email: "juliana.santos@example.com",
    dataInscricao: new Date(2024, 1, 18, 10, 0),
    dataChekIn: new Date(2024, 1, 28, 12, 15)
  },
]
const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to 
    (participante.dataInscricao)
    let dataChekIn = dayjs (Date.now()).to
    (participante.dataChekIn)
    if (participante.dataChekIn == null) {
      dataChekIn = `
      <button
        data-email = "${participante.email}"
        onclick = "fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    ` 
        
   }

  return `
  <tbody>
    <tr>
      <td>
        <strong>
         ${participante.nome}
        </strong>
        <small>
          <br>
          ${participante.email}
        </small>
      </td>
      <td>
        ${dataInscricao}
      </td>
      <td>
        ${dataChekIn}
      </td>
    </tr>
  </tbody>
  `
}
const atualizarMensagem = (participantes) => {
  let output = "" 
  //repetição
  for (let participante of participantes){
    output += criarNovoParticipante(participante)
  }
  // Substituir informação HTML
  document.querySelector('tbody')
 .innerHTML = output
}
atualizarMensagem(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome  : dadosDoFormulario.get('nome'),
    email : dadosDoFormulario.get('email'),
    dataInscricao : new Date(),
    dataChekIn: null
  }

//verificar se participante existe
const participanteExiste = participantes.find(
  (p) => p.email == participante.email
)
if (participanteExiste) {
  alert ("Participante já cadastrado!")
  return
}


//Adicionar o participante
  participantes = [participante, ...participantes]
  atualizarMensagem(participantes)

//Limpar formulário
  event.target.querySelector('[name = "nome"]').value = ""
  event.target.querySelector('[name = "email"]').value = ""
}
const fazerCheckIn = (event) => {

//confirmar se quer check-in
const MensagemConfirmacao = ('Tem certeza que quer fazer o check-in?')
  if(confirm(MensagemConfirmacao) == false)
    return

//econtrar participante na lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })

//atualizar a dataCheckIn do participante
  participante.dataChekIn = new Date()

//atualizar a lista de participantes
  atualizarMensagem(participantes)

  
}