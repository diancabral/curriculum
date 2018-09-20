<template>

    <div :class="$style.app">

        <div class="col-md-4">

            <div :class="$style.profile">

                <div :class="$style.profile__picture"></div>

                <div :class="$style.profile__name">Dian Carlos</div>
                <div :class="$style.profile__job">Full Stack Web Developer</div>

                <div :class="$style.profile__city">Coqueiral de Itaparica<br />Vila Velha - ES</div>

                <!-- <ul :class="$style.profile__contacts">

                    <li :class="$style.profile__contacts__item">(28) 9 9921 - 4097 (Vivo)</li>
                    <li :class="$style.profile__contacts__item">dian.cabral@gmail.com</li>
                    <li :class="$style.profile__contacts__item">facebook.com/diancomd</li>
                    <li :class="$style.profile__contacts__item">instagram.com/diancabral</li>

                </ul> -->

            </div>

        </div>

        <div class="col-md-8">

            <div :class="$style.info">

                <h2>Bio</h2>

                <p>Opá! Tudo joia? Meu nome é Dian Carlos, tenho {{ idade }} e moro em Vila Velha - ES no bairro Coqueiral de Itaparica. Sou um Full Stack Web Developer com mais de {{ experiencia }} de experiência profissional.</p>

                <p>No meu trabalho procuro sempre usar as melhores tecnologias de desenvolvimento disponíveis, para criar produtos de qualidade e com alto desempenho. Além disso, prezo muito pela beleza dos produtos, tendo cuidado a um nivel milimétrico. Gosto de criar coisas belas, porém objetivas, que enche os olhos de quem vê. Tudo isso somado faz com que o usuário final tenha uma ótima experiencia e que o produto tenha um grande destaque entre outros.</p>

                <p>Fico muito bem a vontade trabalhando em equipe e sempre estou me atualizando com novas técnicas, ferramentas e tecnologias que vão surgindo no mundo do desenvolvimento. Partilhar conhecimento com todos é uma coisa que faço com prazer.</p>

                <br>

                <h2>Skills</h2>

                <p>Atualmente, tenho experiência nas seguintes tecnologias, ferramentas, serviços online e frameworks:</p>

                <ul>

                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Sass</li>
                    <li>Less</li>
                    <li>Bootstrap 4 (Grid e Display Property)</li>
                    <li>JavaScript (ES6)</li>
                    <li>Vue.js (vuex, vue-resource, vue-router)</li>
                    <li>PHP7</li>
                    <li>Phalcon PHP</li>
                    <li>JSON Web Token (JWT)</li>
                    <li>NodeJS</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>Socket.io</li>
                    <li>NPM</li>
                    <li>Yarn</li>
                    <li>Grunt</li>
                    <li>webpack</li>
                    <li>BrowserSync</li>
                    <li>Modernizr</li>
                    <li>Composer PHP</li>
                    <li>Git (GitHub e BitBucket)</li>
                    <li>Amazon Web Services (S3, CloudFront e SNS)</li>
                    <li>Google Fonts</li>
                    <li>Google Analytics</li>
                    <li>Atom</li>
                    <li>XAMPP</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>

                </ul>

                <br>

                <h2>Experiência Profissional</h2>

                <p>

                    <b>2012 - 2018</b><br>
                    <b>Arco Websites & E-commerce</b><br>
                    Cachoeiro de Itapemirim - ES<br>
                    Cargo: Desenvolvedor Sênior

                </p>

                <br>

                <p>Aqui fui responsável pelo desenvolvimento de sites para várias grandes empresas, tanto individualmente como em equipe. Também obtive grande experiência em atendimento ao cliente, suporte técnico e confecção de artes e banners.<p>

                <p>Tive o prazer de desenvolver o site da Ordem dos Advogados do Brasil Seccional Espírito Santo - OAB-ES (<a href="http://oabes.org.br" target="_blank" rel="noopener">http://oabes.org.br</a>) com sede em Vitória - ES.</p>

                <p>Participei no desenvolvimento da plataforma de E-commerce da empresa e com ela várias lojas virtuais. Destaco o Prático Supermercado Online (<a href="https://praticosupermercado.com.br" target="_blank" rel="noopener">https://praticosupermercado.com.br</a>) que foi o primeiro Supermercado 100% Online de Cachoeiro de Itapemirim - ES.</p>

                <p>Também criei o design e desenvolvi muitos sites de imobiliárias. Destaco o site da Renê Empreendimentos Imobiliários (<a href="https://reneweb.com.br" target="_blank" rel="noopener">http://reneweb.com.br</a>) que é uma das maiores imobiliárias da região sul do ES.</p>

                <br>

                <p>

                    <b>2010</b><br>
                    <b>Q.I. Virtual</b><br>
                    Mimoso do Sul - ES<br>
                    Cargo: Auxiliar de Foto Estúdio

                </p>

                <p>Foi uma experiência rápida, porem aprendi muito sobre edição de imagens e fotografia. Foi aqui que iniciei profissionalmente a minha caminhada no mundo do desenvolvimento quando criei o site da empresa.</p>

                <br>

                <h2>Formação Acadêmica</h2>

                <p>

                    <b>Graduação em Análise e Desenvolvimento de Sistemas</b><br>
                    Faculdade Multivix - Cachoeiro de Itapemirim - ES<br>
                    Início em 2015 (Atualmente estou com a matricula trancada)<br>
                    3º Período completo

                </p>

            </div>

        </div>


    </div>

</template>

<script>

    import moment from 'moment';
    moment.locale('pt_BR');

    /* */

    export default {

        data(){

            return {

                gravatar : 'http://www.gravatar.com/avatar/941e983886a2603e9585326a98e3dffa.jpg?s=300'

            }

        },

        computed: {

            idade(){

                return moment('1994-08-22').toNow(true);

            },

            experiencia(){

                return moment('2010-12-30').toNow(true);

            }

        }

    }

</script>

<style lang="scss">

    html {

        font-size: 10px;

        overflow: hidden;

    }

    @import 'bootstrap/scss/bootstrap-reboot.scss';
    @import 'bootstrap/scss/bootstrap-grid.scss';

</style>

<style lang="scss" module>

    $theme-padding: 15px;

    /* */

    @mixin font-sizer($size){

    	$px  : $size;
    	$rem : $size / 10;

    	font-size: #{$px}px;
    	font-size: #{$rem}rem;

    }

    /* */

    .app {

        position: relative;

        float: left;

        width: 100%;
        height: 100vh;

        display: flex;
        align-items: center;

        &::before {

            content: '';

            position: fixed;

            top: 0;
            left: 0;

            width: 33.33333%;
            height: 100vh;

            background: linear-gradient(135deg, #E91E63, #FF9800);

        }

    }

    .profile {

        float: left;

        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        &__picture {

            $size: 200px;

            float: left;

            width: $size;
            height: $size;

            margin-bottom: $theme-padding;

            border-radius: $size / 2;

            box-shadow: 0 0 0 3px white, 0 0 100px rgba(black, .2);

            background: white url('http://www.gravatar.com/avatar/941e983886a2603e9585326a98e3dffa.jpg?s=300') no-repeat center;
            background-size: cover;

        }

        %base {

            float: left;

            width: 100%;

            text-align: center;
            font-family: 'Barlow', sans-serif;
            line-height: 1.2;
            color: white;

        }

        &__name {

            @extend %base;

            @include font-sizer(38);
            font-weight: 600;

        }

        &__job {

            @extend %base;

            @include font-sizer(15);
            font-weight: 300;

        }

        &__city {

            @extend %base;

            margin-top: $theme-padding;

            @include font-sizer(14);
            font-weight: 300;

        }

        &__contacts {

            @extend %base;

            margin: $theme-padding  0;
            padding: 0;

            list-style: none;

            &__item {

                line-height: 1.2;
                @include font-sizer(18);
                font-weight: 500;

            }

        }

    }

    .info {

        float: left;

        width: 100%;
        width: calc(100% + #{$theme-padding});
        height: 100vh;

        padding: $theme-padding * 4;

        overflow: auto;

        font-family: 'Barlow', sans-serif;
        @include font-sizer(16);
        font-weight: 400;
        color: black;

        h1, h2, h3, h4, h5, h6 {

            margin-bottom: 2rem;

        }

    }

</style>
