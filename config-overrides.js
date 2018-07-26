const rewireMobX = require('react-app-rewire-mobx');
const rewirePreact = require('react-app-rewire-preact');
const rewireLess = require('react-app-rewire-less');
const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override(config, env) {
  // add a plugin
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  // 主题定制
  config = rewireLess.withLoaderOptions({
    // modifyVars: { "@primary-color": "#1DA57A" },
  })(config, env);
  // use the Preact rewire
  if (env === "production") {
    console.log("⚡ Production build with Preact");
    config = rewirePreact(config, env);
  }

  // use the MobX rewire
  config = rewireMobX(config,env);

  return config;
}
