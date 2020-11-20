# Gatsby Source Open Exchange Rates

Gatsby source plugin for the Open Exchange Rates API.

This plugin allows you to query exchange rates from the GraphQL layer in your Gatsby project.

## Install

```shell
yarn add gatsby-source-open-exchange-rates
```

or

```shell
npm install gatsby-source-open-exchange-rates
```

## How to use

To get started, sign up on [https://openexchangerates.org](https://openexchangerates.org) to generate an App ID.

Then, you can add it as an environment variables in your `.env` file:

```
OPEN_EXCHANGE_RATES_APP_ID=
```

Next, add the following to your `gatsby-config.js` file:

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-open-exchange-rates`,
      options: {
        appId: process.env.OPEN_EXCHANGE_RATES_APP_ID // required
      }
    }
    // ...
  ]
};
```

## How to query

### Query all latest exchange rates

To query all latest exchange rates, use the following GraphQL query:

```graphql
{
  allOpenExchangeRates {
    nodes {
      currency
      rate
    }
  }
}
```

Which will return the following:

```json
{
  "allOpenExchangeRates": {
    "nodes": [
      {
        "currency": "AED",
        "rate": 3.673
      },
      {
        "currency": "AFN",
        "rate": 77.050008
      },
      {
        "currency": "ALL",
        "rate": 104.05
      },
      {
        "currency": "AMD",
        "rate": 481.616228
      }
      // ...
    ]
  }
}
```

### Query specific exchange rate

To query a given exchange rate, you can pass it as a variable to your GraphQL query:

```graphql
{
  openExchangeRates(currency: { eq: "EUR" }) {
    currency
    rate
  }
}
```

Which will return the following:

```json
{
  "openExchangeRates": {
    "currency": "EUR",
    "rate": 0.843291
  }
}
```

## Credits

[Nicolas Spehler](https://nspehler.com)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
