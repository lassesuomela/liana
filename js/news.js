const getNews = () => {
    axios.get('https://cors-anywhere.herokuapp.com/https://www.lianatech.com/resources/blog.rss')
    .then(response => {

        if(response.status !== 200) {
            console.error(response);
            return;
        }

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "text/xml");

        let payload = {};

        for(let i = 1; i < 4; i++) {
            payload[i] = {};
            payload[i]["title"] = xmlDoc.getElementsByTagName("title")[i].textContent;
            payload[i]["description"] = xmlDoc.getElementsByTagName("description")[i].textContent;
            payload[i]["url"] = xmlDoc.getElementsByTagName("link")[i].textContent;
            payload[i]["date"] = xmlDoc.getElementsByTagName("pubDate")[i].textContent.substring(5, 16);
        }

        const letters = document.getElementsByClassName("letter");

        Array.from(letters).forEach((letter, i) => {
            letter.children[0].children[0].innerText = payload[i+1].date;
            letter.children[0].children[1].innerText = payload[i+1].title;
            letter.href = payload[i+1].url;
        });

   })
    .catch(error => console.error(error));
};
getNews();