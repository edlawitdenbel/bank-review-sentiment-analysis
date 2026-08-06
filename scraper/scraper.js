const gplay = require('google-play-scraper').default;
const fs = require('fs');

const apps = {
  BOA: 'com.boa.boaMobileBanking',     // replace with real ID
  CBE: 'com.combanketh.mobilebanking',
  Dashen: 'com.dashen.dashensuperapp'
};

(async () => {
  let allReviews = [];

  for (const [bank, appId] of Object.entries(apps)) {
    console.log(`Scraping ${bank}...`);

    const result = await gplay.reviews({
      appId: appId,
      sort: 2,
      num: 200,   // per app
      lang: 'en',
      country: 'et'
    });

    result.data.forEach(r => {
      allReviews.push({
        bank: bank,
        app_id: appId,
        review_id: r.id,
        user_name: r.userName,
        score: r.score,
        content: r.text,
        date: r.date,
        thumbs_up: r.thumbsUp
      });
    });
  }

  fs.writeFileSync('raw_reviews.json', JSON.stringify(allReviews, null, 2));
  console.log('Saved raw_reviews.json');
})();

