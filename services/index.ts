import NR12_1 from '../public/NR12/21.jpg'
import NR12_2 from '../public/NR12/19.jpg'
import NR12_3 from '../public/NR12/nr12.png'
import NR11_1 from '../public/NR11/nr11.png'
import NR11_2 from '../public/NR11/6.jpg'
import NR11_3 from '../public/NR11/nr11.png'
import EM_1 from '../public/EstruturaMetálica/1.jpg'
import EM_2 from '../public/EstruturaMetálica/2.jpg'
import EM_3 from '../public/EstruturaMetálica/4.jpg'
import PMOC_1 from '../public/PMOC/17.jpg'
import PMOC_2 from '../public/PMOC/24.jpg'
import PMOC_3 from '../public/PMOC/18.jpg'
import AVCB_1 from '../public/AVCB/14.jpg'
import AVCB_2 from '../public/AVCB/30.jpg'
import AVCB_3 from '../public/AVCB/15.jpg'
import CO_1 from '../public/Cozinhas/01.png'
import CO_2 from '../public/Cozinhas/02.png'
import CO_3 from '../public/Cozinhas/01.png'
import DE_1 from '../public/Desmanche/29.jpg'
import DE_2 from '../public/Desmanche/28.png'
import DE_3 from '../public/Desmanche/29.jpg'
import LA_1 from '../public/LaudoTecnico/8.jpg'
import LA_2 from '../public/LaudoTecnico/5.jpg'
import LA_3 from '../public/LaudoTecnico/8.jpg'
import PP_1 from '../public/Playground/9.jpg'
import PP_2 from '../public/Playground/10.jpg'
import PP_3 from '../public/Playground/11.jpg'

export const ourServices = [
  { 
    image1: NR12_1,
    image2: NR12_2,
    image3: NR12_3,
    title: 'NR12 Máquinas e Equipamentos',
    description: 'A NR-12, ou a Norma Regulamentadora 12, define referência técnicas, princípios e  medidas de proteção para garantir a saúde e integridade física dos trabalhadores. O seu objetivo é contribuir para a prevenção de acidentes e doenças profissionais, tanto na fase de projeto como na utilização de todo o tipo de máquinas e equipamentos. A NR12 também inclui as etapas de fabricação, importação, comercialização e qualquer outra atividade econômica.',
    howCanIHelpYou: ['Registro máquinas e equipamentos', 'Apreciação e redução de risco', 'Projetos', 'Laudos técnicos', 'Treinamentos', 'Consultoria']
  },
  {
    image1:NR11_1,
    image2:NR11_2,
    image3:NR11_3,
    title: 'NR11 Sistema Transportador',
    description: 'A NR-11 promove a melhoria sistemática da segurança do trabalho nas operações de movimentação, transporte e armazenagem de cargas. Por exemplo: elevadores de carga, guindastes, pontes rolantes, empilhadeiras, esteiras transportadoras, armazéns, canteiros de obras, armazéns, centros de distribuição, etc. aplicam-se a esta norma. Sua adequação é importante para garantir que as empresas cumpram as regulamentações e previnam possíveis acidentes para os trabalhadores.',
    howCanIHelpYou: ['Laudo de integridade física;', 'Planos de manutenção', 'Inspeções periódicas', 'Mapeamento de riscos', 'Consultoria']
  },
  {
    image1:EM_1,
    image2:EM_2,
    image3:EM_3,
    title: 'Estruturas Metálicas',
    description: 'As estruturas metálicas têm por características principais um sistema construtivo mais limpo que o convencional, já que não necessita de mistura de itens como água, areia, cimento e brita, além de ser uma maneira de construção mais ágil por se tratar de montagens, encaixes e apertos e permite uma racionalização maior dos materiais, que sendo gerido de maneira correta, acarreta a redução de custos para a obra',
    howCanIHelpYou: ['Projeto Técnico', 'Memorial de Cálculo', 'Modelagem 3D', 'Detalhamento 2D', 'Inspeções'],
    structuresTypes: ['Galpão metálico', 'Coberturas', 'Linha de Vida', 'Ponte Rolante', 'Pórtico', 'Mezanino', 'Passarelas', 'Estruturas personalizadas']
  },
  {
    image1:PMOC_1,
    image2:PMOC_2,
    image3:PMOC_3,
    title: 'Plano de Manutenção, Operação e Controle',
    description: 'A recomendação do PMOC é ajustar os parâmetros e procedimentos necessários e essenciais para garantir a boa qualidade do ar interno em ambientes públicos e coletivos. A lei foi promulgada para eliminar ou reduzir o risco de doenças associadas à má qualidade do ar, como doenças respiratórias, para os ocupantes desses ambientes. Em outras palavras, o foco é proteger a saúde das pessoas.',
    howCanIHelpYou: ['Elaboração e execução do PMOC', 'Responsabilidade técnica', 'Laudos técnicos', 'Consultoria'],
    benefits: ['Melhorar a qualidade do ar em ambientes climatizados', 'Reduzir o número de doenças respiratórias e afastamentos de funcionários', 'Maior produtividade', 'Maior vida útil dos equipamentos de ar condicionado', 'Reduza os custos de eletricidade']
  },
  {
    image1:AVCB_1,
    image2:AVCB_2,
    image3:AVCB_3,
    title: 'Auto de Vistoria do Corpo de Bombeiro',
    description: 'Um AVCB é um documento que certifica que um edifício cumpre todas as normas de incêndio, está autorizado para circulação de pessoas e está permanentemente ocupado.',
    howCanIHelpYou: ['Projeto técnico simplicado', 'Projeto técnico', 'Laudo de conformidade', 'Responsabilidade técnica'],
    listWithTextBefore: ['Proteger a vida dos edifícios e moradores de áreas perigosas em caso de incêndio', 'Tornar o fogo menos propenso a se espalhar e reduzir os danos ao meio ambiente', 'à propriedade e à vida', 'Fornecer meios de controle e combate a incêndio', 'Fornecer condições de acesso para ações do corpo bombeiros em caso de incêndio', 'Garantir a continuidade dos serviços de construção']
  },
  {
    image1:CO_1,
    image2:CO_2,
    image3:CO_3,
    title: 'Sistemas de Exaustão de Cozinhas',
    description: 'A norma NBR 14518 estabelece os princípios gerais para projeto, instalação, operação e manutenção de sistemas de ventilação para cozinhas profissionais, com ênfase na segurança contra incêndio e no controle ambiental.',
    howCanIHelpYou: ['Apreciação e redução de riscos', 'Laudos técnicos', 'Consultoria'],
    advantagesTextBefore: ['Inspeção periódica garantindo a vistoria e emissão de Laudo Técnico com recomendação para adequações e regularização em órgãos de vigilância, como a Anvisa',' Evita multas e interdições por condições sanitárias inadequadas',' Segurança contra incêndios e mau funcionamento das instalações',' Preserva a vida útil doS equipamentos dada a manutenção preditiva a ser realizada']
  },
  {
    image1:DE_1,
    image2:DE_2,
    image3:DE_3,
    title: 'Auto Peças Desmanche de Veículos',
    description: 'Você sabia que de acordo com o artigo 7 da resolução CONTRAN 611 de 24/05/2016, é necessário possuir um responsável técnico junto ao conselho regional de engenharia e agronomia-CREA para o exército de suas funções? O Engenheiro mecênico será responsável por selecionar as peças, e informar ao DETRAN quais peças estão aptas para o uso, quais peças vão pra manutenção e quais vão para descarte e aferirá a conformidade da estrutura e das atividades da empresa de desmontagem. Aos que desobedecerem à lei federal, a multa pode variar de R$ 2 mil a R$ 8 mil. Cada infração resulta em uma única multa, independente da quantidade de peças envolvidas. E a mesma infração no prazo de um ano dobra o valor da multa.',
    howCanIHelpYou: ['Documentação das peças', 'Responsabilidade técnica', 'Laudos técnicos', 'Consultoria'],
  },
  {
    image1:LA_1,
    image2:LA_2,
    image3:LA_3,
    title: 'Laudo Técnico',
    description: 'O Laudo Técnico é um relatório montado por um especialista. Ele serve para fazer um diagnóstico geral de todo o serviço. O documento pode apresentar um diagnóstico, uma análise criteriosa, através de vistorias, avaliações. O laudo pode ser para inspecionar a integridade física de estruturas mecânica fixas ou móveis; para atestar se um equipamento, estrutura ou objeto estão em conformidade com as normas/leis;',
    howCanIHelpYou: ['Inspeção', 'Vistoria', 'Elaboração de Laudo Técnico', 'Apreciação e redução de risco', 'Responsabilidade técnica'],
    importance: 'O Laudo Técnico é essencial para a execução de vários trabalhos de Engenharia. Ele pode garantir a segurança das obras, serviços, maquinas e do trabalhador, para evitar possíveis tragédias. É um documento que reúne os detalhes mais minuciosos sobre o estado das coisas.'
  },
  {
    image1:PP_1,
    image2:PP_2,
    image3:PP_3,
    title: 'Parques e Playgrounds',
    description: 'A NBR 16.071 foi criada em 2012, pela Associação Brasileira de Normas Técnicas (ABNT) em parceria com a Associação Brasileira de Fabricantes de Brinquedos (ABRINQ). A ABNT para playground tem como objetivo estabelecer diretrizes que garantam a segurança dos brinquedos e do local de instalação. A norma também traz questões sobre a inspeção, manutenção e utilização do playground. Visando a segurança e a prevenção de acidentes em parquinhos infantis. Cumprir com a norma não é apenas um ato de precaução, mas, sim, uma obrigação legal. Isso porque em caso de descumprimento, e ou acidentes graves a legislação prevê processo civil e criminal aos responsáveis, que podem ser o condomínio e o síndico, administrador da escola ou proprietários e gestores de espaços que contenham playground, seja ele interno ou externo.',
    howCanIHelpYou: ['Apreciação e redução de risco', 'Laudos técnicos', 'Responsabilidade técnica'],
  }
]