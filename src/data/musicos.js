
const API = `https://v2.api.musicos.xyz/api`


const getLatestTracks = async (count = 10) => {
  const response = await fetch(API + `/distinct-tracks?pagination[page]=1&pagination[pageSize]=${count}&sort=createdAt:desc`)
  const json = await response.json()

  return json.data.map(({attributes}) => attributes)
}

const getPlatformStats = async (platform) =>  {
  const response = await fetch(API + `/distinct-tracks?pagination[page]=1&pagination[pageSize]=1&filters[platform][name][$eq]=${platform}`)
  const json = await response.json()

  return json.meta.pagination.total
}


const getTotalTracks = async () =>  {
  const response = await fetch(API + `/distinct-tracks?pagination[page]=1&pagination[pageSize]=1`)
  const json = await response.json()

  return json.meta.pagination.total
}

const getLatestBlock = async () =>  {
  const response = await fetch(API + `/state`)
  const json = await response.json()



  return json.data.attributes.lastSyncedBlock
}


module.exports = async function() {
  const latestTracks = await getLatestTracks(10)
  const trackCount = await getTotalTracks()

  const platform_sound = await getPlatformStats('Sound')
  const platform_soundProtocol = await getPlatformStats('Sound Protocol')
  const platform_catalog = await getPlatformStats('Catalog')
  const platform_mintSongs = await getPlatformStats('Mint Songs')
  const platform_noizd = await getPlatformStats('Noizd')

  const lastSyncedBlock = await getLatestBlock()

  return {
    latestTracks,
    trackCount,
    platforms: {
      sound: platform_sound,
      soundProtocol: platform_soundProtocol,
      catalog: platform_catalog,
      mintSongs: platform_mintSongs,
      noizd: platform_noizd,
    },
    lastSyncedBlock
  }
};