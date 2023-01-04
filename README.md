This is a [Next.js](https://nextjs.org/) hosted on the edge with AWS Lambda@Edge.

## Disclaimer

The app is for testing and research purposes only. No liability is assumed for any costs incurred or incorrect code. Execution at your own risk!

## Getting Started

1. First clone the repository

2. Install node_modules:

```bash
npm install
# or
yarn install
```

First, run the development server:

```bash
# start next.js app in development environment
npx next dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on AWS

1. Install [serverless package globally](https://www.serverless.com/plugins/serverless-nextjs-plugin)

```bash
npm install -g serverless
# or
yarn install -g serverless
```

2. Create a free AWS Account [here](https://aws.amazon.com/de/free/)

3. Export AWS credentials as environment variables

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY

4. Create a free MongoDB Account [here](https://www.mongodb.com/cloud/atlas/register)

5. Deploy Next.js App serverless

```bash
npx serverless
```

6. After first Deployment configure `next.config.js` with your credentials for `PRODUCTION`

```bash
- HOST_URL: "CLOUDFRONT_DISTRIBUTION_URL", # url for API
- MONGODB_URI:"MONGO_DB_URI", # your connection string in your MongoDB account
- JWT_KEY: "JWT_KEY", # just type in a secret key
```

7. Deploy Next.js App serverless again with correct HOST_URL in `next.config.js`

```bash
npx serverless
```

8. After successfull Deployment, open your application in your browser with the url of your AWS CloudFront Distribution
