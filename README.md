# Grafana Giphy Searcher Panel Plugin

This panel shows giphy's images searched by keywords from the Giphy's images base

### Plugin options

- **Search limit**:
    Default is 25. Values more than 100 will be reduced to 100.

### Development

Using Docker:

1. Clone the repository and `cd` to it
1. make sure you have [npm] installed
1. install project dependencies: `npm install`
1. Start the "watch" task: `npm run watch`
1. Run a local Grafana instance with the development version of the plugin: `docker run -p 3000:3000 -d --name grafana-plugin-dev --volume $(pwd)/dist:/var/lib/grafana/plugins/giphy-searcher grafana/grafana`
1. Check the logs to see that Grafana has started up: `docker logs -f grafana-plugin-dev`
1. Open Grafana at http://localhost:3000/
1. Log in with username "admin" and password "admin"
1. Create new dashboard and add the plugin

For running tests type: `npm test`
