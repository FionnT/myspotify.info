const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`

export const getNowPlaying = async (token: String | String[] = ""): Promise<Response> => {
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const getSpotifyData = async (period: String | String[] = "long_term", token: String | String[] = ""): Promise<any> => {
  let TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=${period}&limit=10`
  let TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=${period}&limit=3`
  let RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=10`
  let PROFILE_URL_ENDPOINT = "https://api.spotify.com/v1/me/"

  const responseTracks = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const responseArtists = await fetch(TOP_ARTISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const responseRecently = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const responseProfile = await fetch(PROFILE_URL_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return { responseArtists, responseRecently, responseTracks, responseProfile }
}
