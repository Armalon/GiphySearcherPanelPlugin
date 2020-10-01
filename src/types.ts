export interface SimpleOptions {
  searchLimit: number
}

export type GiphyResponse = {
  data: GiphyObject[]
}

export type GiphyObject = {
  id: number,
  type: string,
  url: string,
  images: {
    downsized: {
      url: string
    }
  }
}

export type OurGiphyObject = {
  id: number,
  url: string,
}
