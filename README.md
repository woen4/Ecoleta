# Ecoleta
<h1 align=center>
<img src="https://lh3.googleusercontent.com/pw/ACtC-3cPHvtbek_SSKZ6b7a21TNL3zEK6CJ8zSXtmhiKOI3cWcZqAPtWjKWSzFf1zj1MnJ1Vm_-_6Cz7c-Iwq2untB78eTHUKcey18kErLgR-l2Da1-sBGpwBPnz7gZNrXj71EusgzMmCtCoYMIqNJ8saNE=w1323-h658-no?authuser=0" />
</h1>

<div align="center">

![BADGE_WEB_REACT] ![BADGE_MOBILE_REACT_NATIVE] ![BADGE_SERVER_NODEJS] ![BADGE_TYPESCRIPT] ![BADGE_EXPO] ![BADGE_STARS]

</div>

<h3 align="center">

♻️ Projeto de código aberto que possibilita pessoas encontrarem e proverem pontos de coleta de resíduos.

Este projeto teve seu desenvolvimento guiado pela instituição educacional <a href="www.rocketseat.com">**RocketSeat**<a>, na 1ª Edição do evento Next Level Week, promovido por tal instituição. Projeto onde foi utilizado as tecnologias <a href="https://nodejs.org/en/">**Node**<a>, <a href="https://www.typescriptlang.org">**TypeScript**<a>, <a href="https://reactjs.org">**React**<a> e <a href="https://reactnative.dev">**React Native**<a>

</h3>

![Banner](https://lh3.googleusercontent.com/i57Qyeq1UBuuKkzD5mwBWLZgz2H_6P3gIWF8CzhioreWU4EQX4_4BAZe7IEfEHjHamYb7L8Gv4uOm1svqJ7hkhHXNlhsT8bkz9EAtlBdL63RYxjfDl1plriql4oXsDWki99ucE-Mx5B-0H6iQi9PBY0hWJv6uEk4HTtksyt053pbJagqVkmuR8EMEHv84kzsO9_0LgH26sUCq1qLNkWKsCCrRvGwJM8RKNKR8MIFSch9VeIn6QBx4M7yB9DB4C1GJJSlClEi_BSIQlcX55Ox8l3nuBtVyQqB5b9sEG_sR_ppdj_To0RTEDLXa_nPjHEK9CIYXyJ3OtUd0-9_7lJeDk0O2H6_NyRxfHPkeoIaePP9EVHpNGpzRYHN_26w2lET480L1jSLTQPMNbNcdkAujTrc7i8LwZFU72sz4IYhgLQqQzWpX3YcPxCQwB7hpKTa2iZWD3_YhLaY6G4zWvkqwhlCzT7z3N6SzE7SGVAmm5hJJ7ODBC9jCl4nzFfuXKinvPi5vbmvH7aHbJL4UBI_XirzlhfqIgKBXvbQV2Q4j0w6k2auXCzcsJnZ8qbkG0fnKU9XXFWGCl_lDPksXxD1s1YZeGeLPA7D9hoERHAKlEUZQnnCVmaK12tvCT_pi3T7-E6NSstcMyuBtw8ZK08lR-nDl5csOUqqhcXNe00kshPxGGmSBEH5aeVquqND=w1323-h658-no?authuser=0)

## **:dart: OBJETIVO**

Este projeto tem como objetivo principal conectar empresas e/ou instituições que coletam resíduos (orgânicos e inorgânicos) às pessoas e/ou entidades que precisam descartar esses resíduos, no intuito de facilitar o processo de reutilização e recliclagem.

As empresas e/ou entidades podem cadastrar seus pontos de coleta por meio do site, e as pessoas e/ou entidades que precisam descartar esses resíduos podem fazer isso por meio do aplicativo mobile.

## **:computer: TECNOLOGIAS**


#### **Server** ([NodeJS][node] + [TypeScript][typescript])

  - **[Express][express]**
  - **[CORS][cors]**
  - **[KnexJS][knex]**
  - **[SQLite][sqlite3]**
  - **[ts-node][tsnode]**
  - **[dotENV][dotenv]**
  - **[Multer][multer]**
  - **[Celebrate][celebrate]**
  - **[Joi][joi]**


#### **Web** ([React][react] + [TypeScript][typescript])

  - **[React Router Dom][react_router_dom]**
  - **[React Icons][react_icons]**
  - **[Axios][axios]**
  - **[Leaflet][leaflet]**
  - **[React Leaflet][react_leaflet]**
  - **[React Dropzone][react_dropzone]**



#### **Mobile** ([React Native][react_native] + [TypeScript][typescript])

  - **[Expo][expo]**
  - **[Expo Google Fonts][expo_google_fonts]**
  - **[React Navigation][react_navigation]**
  - **[React Native Maps][react_native_maps]**
  - **[Expo Constants][expo_constants]**
  - **[React Native SVG][react_native_svg]**
  - **[Axios][axios]**
  - **[Expo Location][expo_location]**
  - **[Expo Mail Composer][expo_mail_composer]**


## **:game_die: COMO UTILIZAR**

### Utilizando o aplicativo:
> (Android) Baixe o aplicativo  clicando neste link: https://expo.io/artifacts/b8b584a6-3475-4f1e-9dd8-fadb70107fd7
> (iOS) Esperando um problema do Expo ser resolvido para publica o app ios :(

### Utilizando o Website

```sh
# 1. Baixe e instale o node:
- Link do Node.js: https://nodejs.org/en/ (Para instalar: Próximo, Próximo, Próximo...)

# 2. Baixe e prepare os arquivos deste repositório:
- Clique em Code -> Clique em download ZIP -> Espere baixar -> Extraia o arquivo baixado

# 3. Abra o terminal o diretório do website:
- Windows: Tecla Windows + X -> Clique em Windows PowerSheel (Admin)
- Linux: Ctrl + Alt + T
- Mac OS: https://pt.wikihow.com/Abrir-o-Terminal-no-Mac

# 4. Abra o diretório do repositório que você baixou:
- Execute o comando: cd CaminhoDoRepositório/Web (Exemplo: c:/users/documents/woen/Ecoleta/Web)

# 5. Execute este comando para que o Node.js instale seus módulos:
- npm install

# 6. E por fim, execute o comando:
- npm start

# 7. Pronto!
```

### Utilizando o servidor:
> O servidor foi hospedado no <a href="www.heroku.com">Heroku<a> e você não precisa se preocupar com isso!

## :star: Créditos 

<h4> 
  
  <a href="https://www.instagram.com/rocketseat_oficial/">**RocketSeat**<a>, 
  <a href="https://www.instagram.com/dieegosf/">**Diego Fernande**s<a>,
  <a href="https://www.instagram.com/maykbrito/">**Maiky Brito**<a>.
  
<h4>


<!-- Technologies -->

[react]: https://reactjs.org/

[typescript]: https://www.typescriptlang.org/

[node]: https://nodejs.org/en/

[leaflet]: https://react-leaflet.js.org/en/

[react_native]: http://www.reactnative.com/

[express]: https://expressjs.com/

[cors]: https://expressjs.com/en/resources/middleware/cors.html

[knex]: http://knexjs.org/

[sqlite3]: https://github.com/mapbox/node-sqlite3

[tsnode]: https://github.com/TypeStrong/ts-node

[react_leaflet]: https://react-leaflet.js.org/

[react_router_dom]: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom

[react_icons]: https://react-icons.github.io/react-icons/

[axios]: https://github.com/axios/axios

[dotenv]: https://github.com/motdotla/dotenv

[expo]: https://expo.io/

[expo_google_fonts]: https://github.com/expo/google-fonts

[react_navigation]: https://reactnavigation.org/

[react_native_maps]: https://github.com/react-native-community/react-native-maps

[expo_constants]: https://docs.expo.io/versions/latest/sdk/constants/

[react_native_svg]: https://github.com/react-native-community/react-native-svg

[expo_location]: https://docs.expo.io/versions/latest/sdk/location/

[expo_mail_composer]: https://docs.expo.io/versions/latest/sdk/mail-composer/

[font_awesome]: https://fontawesome.com/

[multer]: https://github.com/expressjs/multer

[celebrate]: https://github.com/arb/celebrate

[joi]: https://github.com/hapijs/joi

[react_dropzone]: https://github.com/react-dropzone/react-dropzone

[yarn]: https://classic.yarnpkg.com/en/docs/install/#debian-stable

<!-- Badges -->


[BADGE_WEB_REACT]: https://img.shields.io/badge/web-react-blue

[BADGE_MOBILE_REACT_NATIVE]: https://img.shields.io/badge/mobile-react%20native-blueviolet

[BADGE_EXPO]: https://img.shields.io/badge/mobile-expo-black

[BADGE_SERVER_NODEJS]: https://img.shields.io/badge/server-nodejs-important

[BADGE_STARS]: https://img.shields.io/github/stars/Woen8/Ecoleta?style=social

[BADGE_TYPESCRIPT]: https://badges.frapsoft.com/typescript/code/typescript.png?v=101
