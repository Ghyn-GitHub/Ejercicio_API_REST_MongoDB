## ENDPOINTS

### Main URL
  - https://ejercicio-api-rest-mongodb-hrl4.onrender.com/

#### CRUD for Providers:

##### READ
  - https://ejercicio-api-rest-mongodb-hrl4.onrender.com/api/providers

##### CREATE
  ```
  {
    "company_name": "Adidas",
    "CIF": "A12345678",
    "address": "Calle Mayor 10, Madrid",
    "url_web": "https://www.adidas.es"
  }
  ```

##### UPDATE
  ```
  {
    "CIF": "A12345678",
    "company_name": "Adidas España",
    "address": "Avenida de España 25, Madrid",
    "url_web": "https://www.adidas.es"
  }
  ```

##### DELETE
  ```
  {
    "company_name": "Adidas España"
  }
  ```



#### CRUD for Products:

##### READ
  - https://ejercicio-api-rest-mongodb-hrl4.onrender.com/api/products

##### CREATE
  ```
  {
    "id": 1,
    "title": "Zapatillas Adidas",
    "price": 89.99,
    "description": "Zapatillas deportivas Adidas",
    "image": "https://example.com/zapatillas.jpg",
    "company_name": "Adidas España"
  }
  ```

##### UPDATE
  ```
  {
    "id": 1,
    "title": "Zapatillas Adidas Premium",
    "price": 109.99,
    "description": "Zapatillas deportivas Adidas edición premium",
    "image": "https://example.com/zapatillas-premium.jpg",
    "company_name": "Adidas España"
  }
  ```

##### DELETE
  ```
  {
    "title": "Zapatillas Adidas Premium"
  }
  ```