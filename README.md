# Projeto Agenda de Produtos e Clientes API NodeJS & Typescript

![Auth](https://user-images.githubusercontent.com/99502194/184500622-29c2e3e0-44c3-4f3f-8632-ad1fd98b2caa.png)

# Sobre o Projeto

API desenvolvida em Express e utilizando MongoDB como banco de dados. Na API inclui CRUD de produtos, clientes e de Categorias.

# Tecnologias usadas

 <p>◼ Nodejs </p>
 ◼ Express </p>
 ◼ Mongoose </p>
 ◼ Cors </p>
 ◼ Body-Parser </p>
 ◼ Nodemon </p>
 ◼ Dotenv </p>
 ◼ Ts-Node </p>

# Configurar Banco de Dados

Em server.ts: 

```
MONGO_URI = link de acesso mongoDB
PORT = porta da máquina onde vai rodar aplicação

})
```

Pasta de diretório de migrations e entidades.

```
entities: [`${__dirname}/../entities/*.{ts,js}`],
migrations: [`${__dirname}/migrations/*.{ts,js}`],
```


# Criando migrations

1 - Crie uma nova entidade

```
@Entity('example')
export class Example {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    test: string;
    }
}
```
2 - Gerar migration

    npm run migration:generate

3 - Rodar migration

     npm run migration:run

# Configurar Sistema de envio de e-mail via Nodemailer

```
import nodemailer from 'nodemailer';

type EmailType = {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
}

const port = process.env.EMAIL_PORT as number | undefined;

const sendEmail = async ({ from, to, subject, text, html }: EmailType ) => {
    try {
        const transport = nodemailer.createTransport({
            host: process.env.EMAIL_HOST as string,
            port: port,
            auth: {
              user: process.env.EMAIL_AUTH_USER as string,
              pass: process.env.EMAIL_AUTH_PASS as string,
            }
        });

        await transport.sendMail({
            from: from,
            to: to,
            subject: subject,
            text: text,
            html: html,
        })
    
        console.log('Email send succesfully')
        
    } catch (err) {
        console.log(err);
    }
}

export default sendEmail;
```

```
EMAIL_PORT = Porta de e-mail
EMAIL_HOST = Hospedagem E-mail
EMAIL_AUTH_USER = Usuário E-mail
EMAIL_AUTH_PASS = Senha E-mail
```
# Rodando aplicação na sua máquina

1 - Clone o repositório

    git clone https://github.com/Routfin/API_Auth_PostgreSQL_Jwt_TypeORM_Express_Typescript.git

2 - Instalar os pacotes NPM

    npm install 
    
3 - Rodar aplicação em nodemon/localhost
    
    npm run dev
 
# Ativar usuário 

Ao criar um novo usuário é necessário acessar a rota post /activate para ativar usuário.

```
email: *emaildeusuario@email.com*
token: *token de ativação enviado por email*
```

## Contribua com o projeto

1 - Crie um fork do projeto.

2 - git remote add origin urlDoRepositórioDoProjeto.

3 - Faça commits para aprimorar o projeto.

4 - Faça push dessa branch para seu projeto no GitHub.

5 - Abra um Pull Request
