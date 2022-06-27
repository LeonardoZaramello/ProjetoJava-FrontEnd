
# ProjetoJava-FrontEnd

Repositório para entrega final da aceleração de Java na Trybe


## Documentação da API


### Rotas referentes aos drones

#### Retorna todos os drones
```http
  GET /drones/
```


#### Retorna um drone
```http
  GET /drones/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer ver |


#### Adiciona um drone
```http
  POST /drones/
```
Passando no body um json no formato:
```json
    {
      "marca": "Marca Exemplo.",
      "modelo": "Modelo Exemplo."
    }
```


#### Modifica as informações de marca e modelo de um drone
```http
  PUT /drones/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer alterar |

Passando no body um json no formato:
```json
    {
      "marca": "Outra Marca.",
      "modelo": "Outro Modelo."
    }
```


#### Deleta um drone
```http
  DELETE /drones/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer deletar |


#
### Rotas referentes às entregas

#### Retorna todas as entregas
```http
  GET /entregas/
```


#### Retorna uma entrega
```http
  GET /entregas/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer ver |


#### Adiciona uma entrega
```http
  POST /entregas/
```
Passando no body um json no formato:
```json
    {
      "longitude": "50.457563",
      "latitude": "35.765342"
    }
```


#### Modifica as informações de longitude e latitude
```http
  PUT /entregas/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer alterar |

Passando no body um json no formato:
```json
    {
      "longitude": "76.874221",
      "latitude": "23.975624"
    }
```


#### Deleta uma entrega
```http
  DELETE /entregas/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer deletar |

## Deploy

Para subir a api, rode na raiz do diretório:

```bash
  mvn install
```
```bash
  mvn spring-boot:run
```

## Melhorias

Testes integrados.

