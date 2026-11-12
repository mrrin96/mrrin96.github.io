import{t as e}from"./CLHlcVtt.js";function t(t){let n=[];return t===e.PRIMARY&&n.push(`
      .swiper-pagination-bullet {
        opacity: 1;
        background-color: var(--bg-dots-primary-default);
        backdrop-filter: blur(6px);
      }
    `,`
      .swiper-pagination-bullet-active {
        background-color: var(--bg-dots-primary-active);
        backdrop-filter: none;
      }
    `),t===e.SECONDARY&&n.push(`
      .swiper-pagination-bullet {
        opacity: 1;
        background-color: var(--bg-dots-secondary-default);
        backdrop-filter: blur(6px);
      }
    `,`
      .swiper-pagination-bullet-active {
        background-color: var(--bg-dots-secondary-active);
        backdrop-filter: none;
      }
    `),n}export{t};