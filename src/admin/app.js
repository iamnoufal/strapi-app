// @ts-ignore
import favicon from "./extensions/favicon.ico";

const config = {
  head: {
    favicon: favicon
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
