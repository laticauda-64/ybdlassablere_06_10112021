/* * * * * * * * * * * * * * * * * * */
/*  Media Card on photographer Page  */
/* * * * * * * * * * * * * * * * * * */

class PhotographerMedia {
    constructor(data) {
        this._data = data;
    }

    render() {
        const { id, photographerId, title, image, likes, date, price, video } = this._data;

        const thumbnail = image
            ? `<img src="public/assets/media/${image}" class="displayMediaSection__mediaCard__picture" alt=""></img>`
            : `<video class="displayMediaSection__mediaCard__picture" title="">
                    <source src="public/assets/media/${video}" type="video/mp4">
                </video>`;

        console.log(thumbnail);

        const article = document.createElement('article');
        article.classList.add('displayMediaSection__mediaCard');
        article.dataset.id = id;

        const content = `
            <a href="#" class="displayMediaSection__mediaCard__link">
                ${thumbnail}
            </a>
            <div class="displayMediaSection__mediaCard__desc">
                <p class="displayMediaSection__mediaCard__desc__title">${title}</p>
                <p class="displayMediaSection__mediaCard__desc__likes">${likes}
                <svg role="img" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="likes">
					<path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"></path>
				</svg>
                </p>    
            </div>
        `;

        article.innerHTML = content;

        return article;
    }
}
