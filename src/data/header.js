import { FcCloseUpMode } from "react-icons/fc";
import { FcClapperboard } from "react-icons/fc";
import { FaAward } from "react-icons/fa6";
import { FcCursor } from "react-icons/fc";

import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "당신이 원하는 모든것",
        icon: <FcCloseUpMode /> ,
        src: "/"
    },
    {
        title: "추천 국내영화",
        icon: <FcClapperboard /> ,
        src: "/today"
    },
    {
        title: "추천 해외영화",
        icon: <FcClapperboard /> ,
        src: "/developer"
    },
    {
        title: "영화제 수상",
        icon: <FaAward /> ,
        src: "/webd"
    },
    {
        title: "영화관련 사이트",
        icon:  <FcCursor /> ,
        src: "/website"
    },
    {
        title: "GSAP Parallax",
        icon: <CiCoffeeCup />,
        src: "/gsap"
    },
    {
        title: "포트폴리오 사이트",
        icon: <CiDumbbell />,
        src: "/port"
    },
    {
        title: "유튜브 클론 사이트",
        icon: <CiFries />,
        src: "/youtube"
    },
];

export const searchKeyword = [
    {
        title: "webstoryboy",
        src: "/search/webstoryboy"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "Vue.js",
        src: "/search/vue.js"
    },
    {
        title: "Next.js",
        src: "/search/next.js"
    },
    {
        title: "Node.js",
        src: "/search/node.js"
    },
    {
        title: "SQL",
        src: "/search/sql"
    },
    {
        title: "portfolio",
        src: "/search/React Portfolio"
    },
    {
        title: "music",
        src: "/search/NewJeans"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/webstoryboy",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/webstoryboy",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io/webstoryboy",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/webstoryboy",
        icon: <AiOutlineInstagram />
    },
]
