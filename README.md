# email-service-portal


# Installation using docker
docker build -t emailservice_portal .
docker run -it -p 8080:8080 -d --name emailservice-portal-vuejs emailservice_portal



# Installation withoutusing docker (Not Recommended method (use above docker commands))

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
