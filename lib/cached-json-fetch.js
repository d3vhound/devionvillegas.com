import lscache from 'lscache'
import fetch from 'isomorphic-unfetch'

const TTL_MINUTES = 7

export default async function(url, options) {
	console.log("URL____>", url)
  // We don't cache anything when server-side rendering.
  // That way if users refresh the page they always get fresh data.
  if (typeof window === 'undefined') {
		return fetch(url, options)
		.then(response => {
			return response.json()
		})
  }

  let cachedResponse = lscache.get(url)

	console.log("cachedResponse", cachedResponse)

  // If there is no cached response,
  // do the actual call and store the response
  if (cachedResponse === null) {
    cachedResponse = await fetch(url, options)
      .then(response => {
				// console.log("------->", response)
				return response.json()
			})
    lscache.set(url, cachedResponse, TTL_MINUTES)
  }

  return cachedResponse
}

export function overrideCache(key, val) {
  lscache.set(key, val, TTL_MINUTES)
}