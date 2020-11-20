const fetch = require("node-fetch");

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  delete configOptions.plugins; // eslint-disable-line no-param-reassign

  const { appId } = configOptions;

  function createNode(properties) {
    return actions.createNode({
      ...properties,
      id: createNodeId(`open-exchange-rates-${properties.currency}`),
      parent: null,
      children: [],
      internal: {
        type: "OpenExchangeRates",
        content: JSON.stringify(properties),
        contentDigest: createContentDigest(properties)
      }
    });
  }

  return fetch(`https://openexchangerates.org/api/latest.json?app_id=${appId}`)
    .then(response => response.json())
    .then(data =>
      Object.keys(data.rates).forEach(currency =>
        createNode({
          currency,
          rate: data.rates[currency]
        })
      )
    );
};
