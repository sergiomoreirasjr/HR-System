// Arquivo para ilustração de como funcionará a seleção de departamento.
// Não é uma opção definitiva mesmo sendo viável, as opções de Departamento possivelmente serão consumidas dinamicamente a partir de uma view no banco de dados. 

const departmentOptions = [
  { value: 'Betim', label: 'Betim' },
  { value: 'Brasília', label: 'Brasília' },
  { value: 'São Paulo', label: 'São Paulo' },
  { value: 'Vitória', label: 'Vitória' },
]

const genderOptions = [
  { value: 'Masculino', label: 'Masculino' },
  { value: 'Feminino', label: 'Feminino' },
  { value: 'Outro', label: 'Outro' },
  { value: 'Prefiro não informar', label: 'Prefiro não informar' }
]

const userTypeOptions = [
  { value: 'Funcionário', label: 'Funcionário' },
  { value: 'Prestador de Serviços', label: 'Prestador de Serviços' },
  { value: 'Externo', label: 'Externo' },
  { value: 'Chão de Fábrica', label: 'Chão de Fábrica' },
]

const titleOptions = [
  { value: 'Diretor de TI', label: 'Diretor de TI' },
  { value: 'Operador de Máquinas I', label: 'Operador de Máquinas I' },
  { value: 'Coordenador de Marketing', label: 'Coordenador de Marketing' },
]

const seniorityOptions = [
  { value: 'Júnior', label: 'Júnior' },
  { value: 'Pleno', label: 'Pleno' },
  { value: 'Sênior', label: 'Sênior' },
]

const managerOptions = [
  { value: 'Fabio Quinteiro', label: 'Fabio Quinteiro' },
  { value: 'Luiz Catarcione', label: 'Luiz Catarcione' },
  { value: 'Wellington Strutz', label: 'Wellington Strutz' },
]

export {
  departmentOptions, 
  genderOptions,
  userTypeOptions,
  titleOptions,
  seniorityOptions,
  managerOptions
} 
  