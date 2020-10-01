const AxiosInstance = {
  get: jest.fn(() => Promise.resolve({
    data: {
      data: [
        {
          id: 123,
          images: {
            downsized: {
              url: 'https://media3.giphy.com/media/xTiTnlVOJVXE3blRoQ/giphy-downsized.gif?cid=10194ca1vrpyb7og2r8beymew74ejn4r9d870aywnjs6iesn&rid=giphy-downsized.gif'
            }
          }
        }
      ]
    },
  })),
  create: function () {
    return this
  }
}

module.exports = AxiosInstance
