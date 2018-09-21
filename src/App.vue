<template>

    <div :class="$style.app">

        <a href="https://github.com/diancabral/curriculum" target="_blank" rel="noopener" class="github-corner" title="Ver código fonte no GitHub" aria-label="View source on Github">

            <svg width="80" height="80" viewBox="0 0 250 250" :style="{

                fill: '#9c27b0',
                position: 'absolute',
                top: 0,
                right: 0,
                zIndex: 100

            }" aria-hidden="true">

                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="#ffffff" style="transform-origin: 130px 106px;" class="octo-arm"></path>
                <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="#ffffff" class="octo-body"></path>

            </svg>

        </a>

        <div :class="$style.profile">

            <div class="container">

                <div class="row align-items-center justify-content-center">

                    <div class="col-4 col-md-12">

                        <div :class="$style.profile__picture__wrapper">

                            <div :class="$style.profile__picture">

                                <img src="./assets/avatar.jpg" alt="Dian Carlos">

                            </div>

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

        <div :class="$style.info" ref="info">

            <div class="container">

                <div class="row justify-content-center">

                    <div class="col-8 col-sm-6 col-md-12">

                        <button :class="$style.info__print" type="button" v-on:click="print()">

                            <i class="material-icons" :class="$style.info__print__icon" >print</i>Imprimir Currículo

                        </button>

                    </div>

                </div>

                <vue-markdown

                    :source="markdown"
                    :anchorAttributes="{

                        target: '_blank',
                        rel: 'noopener'

                    }"

                />

                <div :class="$style.dev">Desenvolvido com <i class="material-icons" :class="$style.dev__icon">favorite</i> em Vila Velha - ES.</div>

            </div>

        </div>

    </div>

</template>

<script>

    import VueMarkdown from 'vue-markdown';

    /* */

    export default {

        data(){

            return {

                markdown: 'Carregando...'

            }

        },

        components : {

            VueMarkdown

        },

        mounted(){

            this.$http.get('README.md').then(response => {

                this.markdown = response.data

            })

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

        width: 100%;

        font-size: 10px;

    }

    @import 'bootstrap/scss/bootstrap-reboot.scss';
    @import 'bootstrap/scss/bootstrap-grid.scss';

    .github-corner:hover .octo-arm {

        animation:octocat-wave 560ms ease-in-out

    }

    @keyframes octocat-wave{

        0%, 100% {

            transform:rotate(0);

        }

        20%, 60%{

            transform:rotate(-25deg);

        }

        40%, 80%{

            transform:rotate(10deg);

        }

    }

    @media (max-width:500px){

        .github-corner:hover .octo-arm {

            animation: none

        }

        .github-corner .octo-arm {

            animation: octocat-wave 560ms ease-in-out

        }

    }

    .github-corner {

        @media(max-width: 768px){

            display: none;

        }

        @media print {

            display: none;

        }

    }

    @media print {

        .container {

            max-width: 100%;

            padding: 0;

        }

    }

</style>

<style lang="scss" module>

    $theme-padding: 15px;
    $break-point-md: 768px - 1px;
    $break-point-sm: 576px - 1px;

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

        @media(min-width: $break-point-md){

            display: flex;
            align-items: center;
            flex-wrap: wrap;

        }

        @media(max-width: $break-point-md){

            padding-top: $theme-padding * 2;

        }

        @media(max-width: $break-point-sm){

            padding-top: $theme-padding;

        }

        @media print {

            padding-top: 0;

        }

        &::before {

            content: '';

            position: fixed;

            top: 0;
            right: (100% / 3) * 2;

            width: 50%;
            height: 100vh;

            background-image: linear-gradient(135deg, #007adf 0%, #00ecbc 100%);

            transform: skewX(3deg);

            @media(max-width: $break-point-md){

                position: absolute;

                left: 0;
                right: auto;

                width: 100%;
                height: 30vh;

                transform: skewX(0deg);

            }

            @media print {

                display: none;

            }

        }

    }

    .profile {

        float: left;

        width: 100%;

        @media(min-width: $break-point-md){

            position: fixed;

            top: 0;
            left: 0;

            width: (100% / 3);
            height: 100vh;

            display: flex;
            align-items: center;

        }

        &__picture {

            $size: 200px;

            float: left;

            border-radius: 100%;

            box-shadow: 0 0 0 3px white, 0 0 100px rgba(black, .2);

            object-fit: cover;

            overflow: hidden;

            img {

                width: 100%;

            }

            @media(min-width: $break-point-md){

                width: $size;
                height: $size;

                margin-bottom: $theme-padding;

                flex: $size 0 0;

            }

            @media(max-width: $break-point-md){

                width: 100%;

            }

            @media print {

                width: 150px;

                box-shadow: none;

            }

            &__wrapper {

                float: left;

                width: 100%;

                display: flex;
                justify-content: center;

                @media print {

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

            }

            @media print {

                color: black;

            }

        }

        &__name {

            @extend %base;

            @include font-sizer(38);
            font-weight: 600;

            @media(max-width: $break-point-md){

                @include font-sizer(24);

            }

        }

        &__job {

            @extend %base;

            @include font-sizer(20);
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

                    @media print {

                        color: black;

                    }

                }

            }

        }

    }

    .info {

        float: left;

        width: 100%;

        @media(min-width: $break-point-md){

            width: (100% / 3) * 2;

            padding: $theme-padding * 4;
            margin-left: (100% / 3);

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
