const flip = {
  flipStart: {
    from: {
      transform: (0, _utils.perspective)('400px')
    },
    to: {
      transform: perspectiveAndRotate('400px', [0, 1, 0, 90])
    },
  },
  flipEnd: {
    from: {
      transform: perspectiveAndRotate('400px', [0, 1, 0, -90])
    },
    to: {
      transform: (0, _utils.perspective)('400px')
    },
  },
};

exports.default = flip;
