# Blogs Api

### Tem como o princípio desenvolver uma API para um blog, essa API deve registrar usuários, criar categorias de posts e armazenar os posts.

#### Nesse Projeto é posto em prática todo o conhecimento em ORM (Sequelize) seguindo os princípios do REST.

<details>
  <summary>Informações no banco de dados</summary>
   <p>
    - Possuirá uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, criará também uma tabela de Categorias para seus Posts e por fim a tabela de Posts, guardando todas as informações dos posts realizados na plataforma. 
   </p>

</details>

### Endpoints

1. Cadastro de usuário (POST): `/user`.
    - Corpo da requisição:
      ~~~
      {
        "displayName": "Brett Wiltshire",
        "email": "brett@email.com",
        "password": "123456",
        "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
      }
      ~~~
      - IMPORTANTE: Caso o cadastro ocorra sem problemas é retornado (response), o token do usuário.

      <br />
      <details>
        <summary>Validações</summary>

          1. O campo displayName deverá ser uma string com no mínimo de 8 caracteres;

          2. O campo email será considerado válido se tiver o formato <prefixo>@<domínio> e se for único. Ele é obrigatório;

          3. A senha deverá conter 6 caracteres. Ela é obrigatória.
      </details>

2. Login (POST): `/login`.
      - Corpo da requisição:
        ~~~
        {
          "email": "email@mail.com",
          "password": "123456"
        }
        ~~~

        <br />
        <details>
          <summary>Validações</summary>
      
            1. Todos os campos, precisão esta, válidos.
        </details>

3. Listagem de usuário (GET): `/user`.
    - IMPORTANTE: A requisição deve ter o token de autenticação nos headers.

4. Listagem de usuário pelo o ID (GET): `/user/:id`
    - IMPORTANTE: A requisição deve ter o token de autenticação nos headers.

5. Cadastro de um nova categoria (POST): `/categories`
    - Corpo da requisição:
      ~~~
      {
       "name": "Inovação"
      }
      ~~~

6. Listagem de categorias (GET): `/categories`
    - IMPORTANTE: A requisição deve ter o token de autenticação nos headers.

7. Listagem de todas os BlogPosts(postagens) do usuário (GET): `/post`
    - IMPORTANTE: A requisição deve ter o token de autenticação nos headers.

8. Busca de um BlogPost(postagem) por base do ID (GET): `/post/:id`
    - IMPORTANTE: A requisição deve ter o token de autenticação nos headers.

## Status do projeto - :construction: Incompleto :construction:
 * Endpoint para criar uma postagem
 * Melhora a estrutura do código



#### :warning: Importante :warning:: O grupo Trybe foi responsavél por realizar o inicio do projeto (e também os commits iniciais), mas precisamente a estrutura do projeto e configuração dos tests para a avaliação do projeto.
