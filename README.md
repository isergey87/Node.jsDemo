# Simple Node.js Demo app
To run execute 
> node server.js

###### Demo CURL

> curl http://127.0.0.1:3000/a
> {"stockPrice":81.24,"logo":"https://storage.googleapis.com/iex/api/logos/A.png","latestNews":"https://api.iextrading.com/1.0/stock/a/article/8252982974156699"}


> curl http://127.0.0.1:3000/aapl/
> {"stockPrice":174.97,"logo":"https://storage.googleapis.com/iex/api/logos/AAPL.png","latestNews":"https://api.iextrading.com/1.0/stock/aapl/article/8282716417030650"}

> curl http://127.0.0.1:3000/123

> Failed get Stock param: Error: Failed to fetch Data from page, status code: 404


###### Config
all config data contains in *config.js*
