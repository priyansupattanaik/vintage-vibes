export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  coverArt: string;
  audioSrc: string;
  year: string;
}

export const songs: Song[] = [
  {
    id: "1",
    title: "The Night We Met",
    artist: "Lord Huron",
    album: "Strange Trails",
    coverArt: "https://i.ytimg.com/vi/esMMHzePMVk/0.jpg",
    audioSrc:
      "https://rr1---sn-gwpa-ccp6.googlevideo.com/videoplayback?expire=1744499858&ei=MqD6Z47ZE7-HjuMPvaHpmA4&ip=104.28.252.174&id=o-AOcOrlNX-PCGWv6iwsitELg3ZMGGZRONXQvayLoPYYOV&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&gcr=in&bui=AccgBcPOJLwcTt3EFSk3-tehYHCxqIsmiIgo885dpQe30WDV00oI4wWupjC28yrVxr3cO8sjbBjTa70w&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=fI5p4Infu1iran9ulBydAc8Q&rqh=1&gir=yes&clen=3372731&dur=208.211&lmt=1719164266509226&keepalive=yes&lmw=1&c=TVHTML5&sefc=1&txp=5532434&n=58joud2mwNfhcQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cgcr%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAPX0SnswvGVS29tJX5BvaWh938egdxTef13DDsvBUK86AiBDz70m9R55Z3iw3yp_tUDPYF_RWtmB-tukEKhvYltzvg%3D%3D&title=The+Night+We+Met&redirect_counter=1&rm=sn-f5fee7e&rrc=104&fexp=24350590,24350737,24350827,24350961,24351173,24351229,24351524,24351528,24351545,24351597,24351606,24351638,24351651&req_id=1adb13ef5c73a3ee&cms_redirect=yes&ipbypass=yes&met=1744478330,&mh=Qx&mip=49.37.116.95&mm=31&mn=sn-gwpa-ccp6&ms=au&mt=1744477981&mv=m&mvi=1&pl=24&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACuhMU0wRgIhAJ4iPYLRh3ANA7iJmNazRk0kAN4e0yI4NLSgK_8mXjzHAiEAgSIIyGc1gqisvrn4FYYxQNNiegd3FP9_Rq9-yYyjne0%3D",
    year: "2015",
  },
  {
    id: "2",
    title: "All I Want",
    artist: "Kodaline",
    album: "In a Perfect World",
    coverArt: "https://i.ytimg.com/vi/3AUtk1wJJBc/0.jpg",
    audioSrc:
      "https://rr4---sn-gwpa-5bgz.googlevideo.com/videoplayback?expire=1744502740&ei=dKv6Z5u1EJOc4t4Pq8-gwQ8&ip=104.28.193.14&id=o-ABY3wgrxYo00pYtT9bk7bUnJNd-13v0QBmFVAw2Nj48K&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&gcr=in&bui=AccgBcPXXBWE8TTrRlpLxeFeSkLwfF7B9gHeKh16hq-daab73F-lbWACWHRbLqL3m8m8X3ShSithZsRe&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=vDI0aiFz6M6QBr3FWMbKCmcQ&rqh=1&gir=yes&clen=4950581&dur=305.746&lmt=1620798096685540&keepalive=yes&lmw=1&c=TVHTML5&sefc=1&txp=5531432&n=nRwslIU6lxp9OQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cgcr%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgYcxSAO3fZgeKIwjBpnlJvklJUAQHGJaSwp7K6pVupfkCIDYSHjHsRp6P20OXdgPRHSzuV-eQ6PQAURR_6vlwCkdg&title=All+I+Want&redirect_counter=1&rm=sn-4g5eyl7l&rrc=104&fexp=24350590,24350737,24350827,24350961,24351173,24351230,24351524,24351528,24351542,24351545,24351594,24351606,24351637&req_id=bbf3d5898986a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&met=1744482012,&mh=MD&mip=49.37.116.95&mm=31&mn=sn-gwpa-5bgz&ms=au&mt=1744480846&mv=u&mvi=4&pl=18&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACuhMU0wRgIhAOlcoohUQroKs1lNC3dyUPRn6BI2519eNxXQ1bL3UH_4AiEA5i9tLW1BFMvrQugDUT_AC6bK1IE3Dl7zQ37zMFzHTZI%3D",
    year: "2013",
  },
  {
    id: "3",
    title: "If I Go, I'm Goin",
    artist: "Gregory Alan Isakov",
    album: "This Empty Northern Hemisphere",
    coverArt: "https://i.ytimg.com/vi/BKc4I_cK0JU/0.jpg",
    audioSrc:
      "https://rr5---sn-gwpa-ccp6.googlevideo.com/videoplayback?expire=1744503909&ei=BbD6Z9ehBa7Eg8UPwcSXgAs&ip=2a09%3Abac1%3A36c0%3A68%3A%3A2a8%3A67&id=o-AJU5uRoXifiuNGHw2Thn90jYgS5qbJbfBiSBf63Q3byN&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&gcr=in&bui=AccgBcMQfd587Oy7CZFSZLN5svvd5dwJPGs9y2dTPl_q7RKscT5J9YhcFbjLTYoSK4trwdI8R0NJ1FX0&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=8-VH5p0UsE9IhN6Adm9Nm6MQ&rqh=1&gir=yes&clen=4326615&dur=267.159&lmt=1648744513224077&keepalive=yes&lmw=1&c=TVHTML5&sefc=1&txp=4532434&n=Ymeo-mrXvrrZVA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cgcr%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAMbCi4pml-CMP_KBh7XS_Tt74ffN6KM4iR-q9buXF84iAiEA4URM8aMl-jj_Ljz4NZu4AKoHrw_hAg08OcrdK3ZnFeY%3D&title=If+I+Go%2C+I%27m+Goin&redirect_counter=1&rm=sn-cvhz77z&rrc=104&fexp=24350590,24350737,24350827,24350961,24351173,24351230,24351523,24351528,24351545,24351557,24351606,24351622,24351637&req_id=638eafc117d4a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&met=1744482313,&mh=7s&mip=49.37.116.95&mm=31&mn=sn-gwpa-ccp6&ms=au&mt=1744482059&mv=m&mvi=5&pcm2cms=yes&pl=24&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl,rms&lsig=ACuhMU0wRQIhALQvr3HY6okPMnqlNte2E0W8SesGIyTJGIxHAPKoNeavAiBx7V_KPuKlW4gE-2C6ugvkwTBZVGIHtlMX7-1pVzwD-Q%3D%3D",
    year: "2009",
  },
  {
    id: "4",
    title: "Cinnamon",
    artist: "Jome",
    album: "Tunnels",
    coverArt: "https://i.ytimg.com/vi/958whlmo4BQ/0.jpg",
    audioSrc:
      "https://rr1---sn-gwpa-ccpk.googlevideo.com/videoplayback?expire=1744504020&ei=dLD6Z8GgOb-V4t4P9Jn1oQU&ip=2a09%3Abac5%3A3b5a%3A1a96%3A%3A2a6%3A27&id=o-AJUYvD-rHPJ0DqE2zKsntlJ0wenSWeh986OBaKWjxkAo&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&gcr=in&bui=AccgBcM-AJS0cJ4it6RSuJKwhBotpEJvpUfX37-23fpofh9VB7qQSQJegPF6HnZRR-PGg2a25jMsRjeC&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=-0FpsZB1ql8q7LwYELfkei0Q&rqh=1&gir=yes&clen=3303947&dur=203.999&lmt=1687984153269314&keepalive=yes&lmw=1&c=TVHTML5&sefc=1&txp=2318224&n=lZuo1zIV-RtOdw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cgcr%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgVD2oHC-SY7swlAIyITslqqIlH8XLAG7nEEKGJQAchAkCIQDQhk9cE9WnYW0kD2FgYc1lnBmVuTAAiiowujNKcqMHjA%3D%3D&title=Cinnamon&redirect_counter=1&rm=sn-npodd7z&rrc=104&fexp=24350590,24350737,24350827,24350961,24351173,24351229,24351523,24351528,24351542,24351545,24351597,24351606,24351638&req_id=90e796105132a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&met=1744482425,&mh=i6&mip=49.37.116.95&mm=31&mn=sn-gwpa-ccpk&ms=au&mt=1744482059&mv=m&mvi=1&pl=24&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACuhMU0wRAIgGKRIAo8YJ6-GFtc8ioZXpqm3dQILllFQO8MDmRw9678CIDhTPbckD4AfVNBa3ivUvzP4Oi-ZwCZ4Ocnk6knaZbYQ",
    year: "2017",
  },
  {
    id: "5",
    title: "Even If It's a Lie (Demo)",
    artist: "Matt Maltese",
    album: "Even If It's a Lie (Demo)",
    coverArt: "https://i.ytimg.com/vi/CcGPrzQMSII/0.jpg",
    audioSrc:
      "https://rr5---sn-cvh7knle.googlevideo.com/videoplayback?expire=1744504212&ei=NLH6Z-fhArKX4t4P87v_2AM&ip=2a09%3Abac1%3A36c0%3A58%3A%3A176%3A71&id=o-AAhBDchNjGvX6qqJUL9UtBilEDZXjhdtscs0osn3wTZ2&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1744482612%2C&mh=qi&mm=31%2C26&mn=sn-cvh7knle%2Csn-npoeens7&ms=au%2Conr&mv=m&mvi=5&pl=64&rms=au%2Cau&pcm2=no&gcr=in&initcwndbps=1902500&bui=AccgBcOSnrR7oy8uriYvVD5Xtj5LLpl-GwYeTXEO8dmnScUbbuffNNqLCE4xuYY2EnIQ9FA5Rd97ToQz&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=NV73pvsZGnWwsr4RIYZKCJMQ&rqh=1&gir=yes&clen=3853613&dur=237.928&lmt=1620595499125240&mt=1744482059&fvip=4&keepalive=yes&lmw=1&c=TVHTML5&sefc=1&txp=1311222&n=19Metx731bl8cg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cpcm2%2Cgcr%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=ACuhMU0wRQIhAK3Azy_PHJAI9egvm25CUG0GtH55895a8jCnQ0-9ujFBAiAqw7tO57kiHVzjGP8DYGk6m-MU3ASc3LoLg8M_Cusemw%3D%3D&sig=AJfQdSswRQIgE6ulvUQX__wp3H7p5WDrpPWWUYlP_wXIOhrZUb1ntU0CIQCIbZRv1TgjR67cwGMY9i9TNK3aVkFbgJqi7AO0zu9fGw%3D%3D&title=youtube+video+%23CcGPrzQMSII",
    year: "2015",
  },
];
