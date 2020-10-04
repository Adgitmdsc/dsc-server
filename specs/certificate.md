# Specification of Certificate API

`get` route : `/certificate/:id`

- access the firebase firestore using admin sdk 
    - collection : `certificates`
    - doc id : generated via script
    - fields stored :
        - one := string : heading of the certificate
        - two := string : name of the person
        - three : string : about the whole event or about the certificate
        - four : string : url to second 

- `/certificate/sample` : returns : 
```
{"one":"this is to certify","two":"DSC ADGITM","three":"on successfully completing the project of creating it's own ccertificate portal","four":"https://firebasestorage.googleapis.com/v0/b/dsc-adgitm.appspot.com/o/dq_logo.png?alt=media&token=08315e12-7334-44d2-aae9-1d034abd71d6"}
```


