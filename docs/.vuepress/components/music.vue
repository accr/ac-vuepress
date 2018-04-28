<template>
    <div id="app">
        <div class="container">
            <h1 align="center">音乐馆</h1>
            <p align="center">
                <img :src="`https://img.shields.io/badge/DEMO-v${version}-41b883.svg?style=flat-square`"/>
                <a href="https://www.npmjs.com/package/vue-aplayer"><img
                        src="https://img.shields.io/npm/v/vue-aplayer.svg?style=flat-square"/></a>
                <a href="https://www.npmjs.com/package/vue-aplayer"><img
                        src="https://img.shields.io/npm/dt/vue-aplayer.svg?style=flat-square"/></a>
                <a href="https://github.com/SevenOutman/vue-aplayer/blob/master/LICENSE"><img
                        src="https://img.shields.io/npm/l/vue-aplayer.svg?style=flat-square"/></a>
            </p>
            <h3>Basic (zero config)</h3>
            <aplayer
                    :music="{
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
          pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
        }"
            />

            <h3>Featured</h3>
            <aplayer
                    autoplay
                    theme="pic"
                    shuffle
                    repeat="list"
                    show-lrc
                    :controls="controls"
                    :muted.sync="muted"
                    :volume.sync="volumeVal"
                    :music.sync='music3'
                    :list='list3'
            />
            <ul>
                <li>Playlist</li>
                <li>Lyrics scroll</li>
                <li>Per-song theme & self-adapting theme</li>
                <li>HLS support</li>
                <li>External controls</li>
                <ul>
                    <li>
                        <a role="button" tabindex="-1" @click="muted = !muted">
                            {{ muted ? 'Unmute' : 'Mute' }} player
                        </a>
                    </li>
                    <li>Volume: <input type="number" step="0.1" min="0" max="1" v-model="volume"></li>
                </ul>
            </ul>
            <h3>Mini mode / Float mode (try dragging it around)</h3>
            <aplayer
                    mini
                    float
                    mode="circulation"
                    :music="{
          title: 'トリカゴ',
          artist: 'XX:me',
          src: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.mp3',
          pic: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.jpg',
        }"
            />
            <footer align="center">
                <p>Thank <a href="https://github.com/DIYgod" target="_blank">@DIYgod</a> and <a
                        href="https://github.com/MoePlayer/APlayer" target="_blank">APlayer</a> for serving demo resources</p>
            </footer>
        </div>
    </div>
</template>
<script>
    import Aplayer from 'vue-aplayer'
    export default {
        name: 'music',
        components: {
            Aplayer,
        },
        computed: {
            volumeVal: {
                get () {
                    return +this.volume
                },
                set (val) {
                    this.volume = val
                }
            }
        },
        data () {
            return {
                version: VERSION,
                controls: false,
                volume: 1,
                muted: false,
                music3: null,
                list3: [
                    {
                        title: '前前前世',
                        artist: 'RADWIMPS',
                        src: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.mp3',
                        pic: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.jpg',
                        lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.lrc',
                    },
                    {
                        title: '光るなら.m3u8',
                        artist: 'Goose house',
                        src: 'https://moeplayer.b0.upaiyun.com/aplayer/hls/hikarunara.m3u8',
                        pic: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
                        lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
                    },
                    {
                        title: '回レ！雪月花',
                        artist: '小倉唯',
                        src: 'https://moeplayer.b0.upaiyun.com/aplayer/snowmoonflowers.mp3',
                        pic: 'https://moeplayer.b0.upaiyun.com/aplayer/snowmoonflowers.jpg',
                        lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/snowmoonflowers.lrc'
                    },
                    {
                        title: 'あっちゅ～ま青春!',
                        artist: '七森中☆ごらく部',
                        src: 'https://moeplayer.b0.upaiyun.com/aplayer/yuruyuri.mp3',
                        pic: 'https://moeplayer.b0.upaiyun.com/aplayer/yuruyuri.jpg',
                        lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/yuruyuri.lrc',
                    }
                ]
            }
        },
        created () {
            this.music3 = this.list3[0]
        }
    }
</script>
<style>
    body {
        font-family: Source Sans Pro, 'PingFang SC', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    .container {
        max-width: 32rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50px;
        padding: 0 15px;
    }
    h1 {
        font-size: 48px;
        color: #41b883;
        margin: 30px 0 10px;
    }
    h2 {
        font-size: 22px;
        color: #555;
    }
    h3 {
        font-size: 24px;
        color: #555;
    }
    hr {
        display: block;
        width: 7rem;
        height: 1px;
        margin: 2.5rem 0;
        background-color: #eee;
        border: 0;
    }
    a {
        color: #41b883;
        text-decoration: none;
    }
    p {
        font-size: 18px;
    }
    .github-corner:hover .octo-arm {
        animation: octocat-wave 560ms ease-in-out
    }
    @keyframes octocat-wave {
        0%, 100% {
            transform: rotate(0deg)
        }
        20%, 60% {
            transform: rotate(-25deg)
        }
        40%, 80% {
            transform: rotate(10deg)
        }
    }
    @media (max-width: 500px) {
        .github-corner:hover .octo-arm {
            animation: none
        }
        .github-corner .octo-arm {
            animation: octocat-wave 560ms ease-in-out
        }
    }
</style>