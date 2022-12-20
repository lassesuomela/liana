function subscribe(e) {
    e.preventDefault();

    const subNews = document.getElementById('subscribeNews');

    subNews.style.display = 'none';

    const thankyou = document.getElementById('subscribed');

    thankyou.style.display = 'block';

    thankyou.scrollIntoView();

}