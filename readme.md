# Cadasatro de carro

**RF**
- Deve ser possível cadastrar um novo carro

**RN**
- Não deve ser possível cadastrar o carro com a mesma placa
- Não deve ser possível alterar a placa de um carro que já esteja cadastrado
- O carro deve ser cadastrado como disponível
- Apenas administradores poderão cadastrar carros

# Listagem de carros

**RF**
- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis por categoria
- Deve ser possível listar todos os carros disponíveis por marca
- Deve ser possível listar todos os carros disponíveis por nome do carro

**RN**
- O usuário não precisa estar autenticado


# Cadastro de Especificação no carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro
- Deve ser possível listar todas as especificações
- Deve ser possível listar todos os carros

**RN**
- Não deve ser possível cadastrar uma especificação para um carro inexistente
- Não deve ser possível uma especificação já existente para o mesmo carro
- Apenas administradores poderão ter acesso ao cadastro das especificações

# Cadastro de imagens do carro

**RF**
- Deve ser possível cadastrar a imagem do carro
- Deve ser possível listar todos os carros (disponíveis|indisponíveis)

**RNF**
- Utilizar o multer para o upload

**RN**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
- Apenas administradores poderão ter acesso ao cadastro das imagens dos carros

# Aluguel de carro

**RF**
- Deve ser possível cadastrar um aluguel

**RN**
- O aluguel deve ter duração mínima de 24 horas
- Não deve ser possível cadastrar um novo aluguel caso ja exista um em aberto para o mesmo cliente
- Não deve ser possível cadastrar um novo aluguel caso ja exista um em aberto para o mesmo carro