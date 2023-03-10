export default {
  lang: 'tr',
  title: 'Korkma Kodla!',
  description: 'Python\'la Yeni Başlayanlar için Bilgisayar Programcılığı',
  themeConfig: {
    logo: '/kk-logo.png',
    nav: [
      {text: "Metot", link: "00_metot/"},
      {
        text: "Tanış",
        items: [
          {
            text: "Nedir?",
            link: "/01_tanis/01_nedir.md"
          },
          {
            text: "Dokümanlar",
            link: "/01_tanis/02_dokumanlar.md"
          },
          {
            text: "Araçlar",
            link: "/01_tanis/03_araclar.md"
          },
          {
            text: "Katıl",
            link: "https://replit.com/teams/join/uivxunbzyyrgurjgvycynozezhbtover-korkusuz-kodlamacilar"
          },
        ],
      },
      {
        text: "Gramer",
        items: [
          {
            text: "Cümle Yapısı",
            link: "/02_gramer/01_cumle-yapisi"
          },
          {
            text: "Kelimeler",
            link: "/02_gramer/02_kelimeler"
          },
          {
            text: "Dilin Parçaları",
            link: "/02_gramer/03_dilin-parcalari"
          },
        ],
      },

    ],
    outlineTitle: 'Bu sayfada',
    footer: {
      copyright: "Copyright © 2023-present Cem Kaan Kosali",
      message: 'MIT Lisansı altında yayınlanmıştır.',
    }
  
  }
}