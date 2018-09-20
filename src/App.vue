<template>

    <div :class="$style.app">

        <div class="col-md-4">

            <div :class="$style.profile">

                <div class="row align-items-center justify-content-center" style="width: 100%;">

                    <div class="col-4 col-md-12">

                        <div :class="$style.profile__picture__wrapper">

                            <div :class="$style.profile__picture"></div>

                        </div>

                    </div>

                    <div class="col-8 col-md-12">

                        <div :class="$style.profile__name">Dian Carlos</div>
                        <div :class="$style.profile__job">Full Stack Web Developer</div>

                        <ul :class="$style.profile__contacts">

                            <li>

                                <div :class="$style.profile__city">Coqueiral de Itaparica<br />Vila Velha - ES</div>

                            </li>

                            <li :class="$style.profile__contacts__item"><a href="mailto:dian.cabral@gmail.com">dian.cabral@gmail.com</a></li>
                            <li :class="$style.profile__contacts__item"><a href="tel:+5528999214097">(28) 9 9921 - 4097</a> (Vivo)</li>
                            <li :class="$style.profile__contacts__item"><a href="https://wa.me/5528999214097" target="_blank" rel="noopener">https://wa.me/5528999214097</a> (WhatsApp)</li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>

        <div class="col-md-8">

            <div :class="$style.info">

                <div class="row justify-content-center">

                    <div class="col-8 col-sm-6 col-md-12">

                        <button :class="$style.info__print" type="button" v-on:click="print()">

                            <i class="material-icons" :class="$style.info__print__icon" >print</i>Imprimir Currículo

                        </button>

                    </div>

                </div>

                <h2>Bio</h2>

                <p>Opá! Tudo joia? Meu nome é Dian Carlos, tenho {{ idade }} e moro em Vila Velha - ES no bairro Coqueiral de Itaparica. Sou um Full Stack Web Developer com mais de {{ experiencia }} de experiência profissional.</p>

                <p>No meu trabalho procuro sempre usar as melhores tecnologias de desenvolvimento disponíveis, para criar produtos de qualidade e com alto desempenho. Além disso, prezo muito pela beleza dos produtos, tendo cuidado a um nível milimétrico. Gosto de criar coisas belas, porém objetivas, que enchem os olhos de quem vê. Tudo isso somado faz com que o usuário final tenha uma ótima experiência e que o produto obtenha um grande destaque entre outros.</p>

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

                <p>Foi uma experiência rápida, porém aprendi muito sobre edição de imagens e fotografia. Foi aqui que iniciei profissionalmente a minha caminhada no mundo do desenvolvimento quando criei o site da empresa.</p>

                <br>

                <h2>Formação Acadêmica</h2>

                <p>

                    <b>Graduação em Análise e Desenvolvimento de Sistemas</b><br>
                    Faculdade Multivix - Cachoeiro de Itapemirim - ES<br>
                    Início em 2015 (Atualmente estou com a matrícula trancada)<br>
                    3º Período completo

                </p>

                <div :class="$style.dev">Desenvolvido com <i class="material-icons" :class="$style.dev__icon">favorite</i> em Vila Velha - ES.</div>

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

        },

        methods : {

            print(){

                window.print();

            }

        }

    }

</script>

<style lang="scss">

    html {

        font-size: 10px;

    }

    @import 'bootstrap/scss/bootstrap-reboot.scss';
    @import 'bootstrap/scss/bootstrap-grid.scss';

</style>

<style lang="scss" module>

    $theme-padding: 15px;
    $break-point-md: 768px;
    $break-point-sm: 576px;

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
        flex-wrap: wrap;

        @media(max-width: $break-point-md){

            padding-top: $theme-padding * 2;

        }

        @media(max-width: $break-point-sm){

            padding-top: $theme-padding;

        }

        @media print {

            padding-top: 0;

        }

        @media(min-width: $break-point-md){

            &::before {

                content: '';

                position: fixed;

                top: 0;
                right: (100% / 3) * 2;

                width: 50%;
                height: 100vh;

                background-image: linear-gradient(135deg, #007adf 0%, #00ecbc 100%);

                transform: skewX(3deg);

            }

        }

    }

    .profile {

        float: left;

        width: 100%;

        display: flex;
        align-items: center;

        &__picture {

            $size: 200px;

            float: left;

            border-radius: 100%;

            background: white url('http://www.gravatar.com/avatar/941e983886a2603e9585326a98e3dffa.jpg?s=300') no-repeat center;
            background-size: cover;

            @media(min-width: $break-point-md){

                width: $size;
                height: $size;

                margin-bottom: $theme-padding;

                flex: $size 0 0;

                box-shadow: 0 0 0 3px white, 0 0 100px rgba(black, .2);

            }

            @media(max-width: $break-point-md){

                width: 100%;

                padding-bottom: 100%;

            }

            @media print {

                width: 150px;
                height: 150px;

                padding-bottom: 0;

            }

            &__wrapper {

                float: left;

                width: 100%;

                display: flex;
                justify-content: center;

                @media(max-width: $break-point-md){

                    padding-left: $theme-padding * 2;

                }

                @media(max-width: $break-point-sm){

                    padding: 0;

                }

                @media print {

                    padding: 0;

                    display: block;

                }

            }

        }

        %base {

            float: left;

            width: 100%;

            text-align: center;
            font-family: 'Barlow', sans-serif;
            line-height: 1.2;
            color: white;

            @media(max-width: $break-point-md){

                text-align: right;

                color: black;

            }

        }

        &__name {

            @extend %base;

            @include font-sizer(38);
            font-weight: 600;

            @media(max-width: $break-point-md){

                @include font-sizer(24);

                color: #2196f3 !important;

            }

        }

        &__job {

            @extend %base;

            @include font-sizer(15);
            font-weight: 400;

        }

        &__city {

            @extend %base;

            margin-bottom: $theme-padding;

            @include font-sizer(18);
            font-weight: 400;

            @media(max-width: $break-point-md){

                margin: $theme-padding 0 0;

                @include font-sizer(14);

            }

        }

        &__contacts {

            position: relative;

            @extend %base;

            padding: 0;
            margin: 0;

            list-style: none;

            @media(min-width: $break-point-md){

                margin: $theme-padding * 2 0;
                padding: $theme-padding * 2 0;

                &::before {

                    content: '';

                    position: absolute;

                    top: 0;
                    left: 50%;

                    width: 25%;
                    height: 1px;

                    background: rgba(white, .3);

                    transform: translate3d(-50%, 0, 0);

                }

            }

            &__item {

                line-height: 1.2;
                @include font-sizer(18);
                font-weight: 400;

                @media(max-width: $break-point-md){

                    @include font-sizer(14);

                }

                a {

                    color: white;

                    @media(max-width: $break-point-md){

                        color: black;

                    }

                }

            }

        }

    }

    .info {

        float: left;

        width: 100%;
        height: 100vh;

        padding: $theme-padding * 4;

        @media(min-width: $break-point-md){

            width: calc(100% + #{$theme-padding});

            overflow: auto;

        }

        @media(max-width: $break-point-md){

            padding: $theme-padding * 2;

            height: auto;

        }

        @media(max-width: $break-point-sm){

            padding: 0;
            margin-top: $theme-padding * 2;

        }

        @media print {

            margin-top: $theme-padding * 2;

        }

        &__print {

            padding: $theme-padding / 2 $theme-padding * 2;
            margin-bottom: $theme-padding * 3;

            font-family: 'Barlow', sans-serif;
            @include font-sizer(16);
            text-transform: uppercase;
            font-weight: 600;
            color: white;

            background: #9c27b0;

            border: 0;
            border-radius: 50px;

            outline: none;

            cursor: pointer;

            display: flex;
            align-items: center;

            @media(max-width: $break-point-md){

                width: 100%;

                justify-content: center;

            }

            &__icon {

                margin-right: $theme-padding / 2;

            }

            &:hover {

                background: darken(#9c27b0, 5%);

            }

            @media print {

                display: none;

            }

        }

        font-family: 'Barlow', sans-serif;
        @include font-sizer(16);
        font-weight: 400;
        color: black;

        h1, h2, h3, h4, h5, h6 {

            margin-bottom: 2rem;

            color: #2196f3;
        }

        @media print {

            padding: 0;

            @include font-sizer(14);

        }

    }

    .dev {

        float: left;

        width: 100%;

        margin: $theme-padding * 3 0 0;

        @include font-sizer(13);
        color: #888;

        display: flex;
        align-items: center;

        &__icon {

            margin: 0 3px;

            font-size: 16px !important;

            color: #f44336;

        }

        @media print {

            display: none;

        }

    }

</style>
