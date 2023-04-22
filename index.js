const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

const fileName = process.env.FILE_NAME;

async function fetchGames(lastAppId = 0, allApps = []) {
  const steamApiKey = process.env.STEAM_API_KEY;
  const steps = parseInt(process.env.STEPS);
  const apiUrl = `https://api.steampowered.com/IStoreService/GetAppList/v1?key=${steamApiKey}&last_appid=${lastAppId}&max_results=${steps}`;

  try {
    const response = await axios.get(apiUrl);
    const apps = response.data.response.apps;

    if (!apps) {
      console.log('Done!');
      return;
    }

    console.log(`${apps.length} games added to the list. Last game ID: ${apps[apps.length - 1].appid}`);

    if (process.env.BLACKLIST) {
      const blacklist = process.env.BLACKLIST.split(',');
      const filteredApps = apps
        .filter(({ name }) => !blacklist.some(term => name.toLowerCase().includes(term)))
        .map(({ appid, name }) => ({ appid, name }));

      allApps.push(...filteredApps);
    } else {
      allApps.push(...apps.map(({ appid, name }) => ({ appid, name })));
    }

    fs.writeFileSync(fileName, JSON.stringify({ applist: { apps: allApps } }, null, 2));

    await fetchGames(allApps.slice(-1)[0].appid, allApps);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

fetchGames();
