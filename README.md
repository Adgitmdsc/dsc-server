# DSC ADGITM server

#### Specfication available in `specs` folder

- Hosting : heroku
- routes :
    - `/` : returns `{"msg" : "Hello World"}`
    - `/certificate/:id` : returns certificate details if exists, else `error`
        - read specification [Here](./specs/certificate.md)