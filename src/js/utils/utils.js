const utils = {
  mapObjStyleAttrs: function (obj) {
    return Object.keys(obj)
      .map(key => {
        return [key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), obj[key]].join(':');
      })
      .join(';');
  },
  encodeQueryData: function (data) {
    return Object.keys(data).map((key) => [key, data[key]].map(encodeURIComponent).join("=")).join("&");
  },
};

export let mapObjStyleAttrs = utils.mapObjStyleAttrs;
export let encodeQueryData = utils.encodeQueryData;

export default utils
