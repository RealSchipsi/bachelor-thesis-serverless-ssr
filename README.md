# Intention

The focus of the project is to analyze the app performance when combining server side rendering and serverless hosting on the edge.

# Disclaimer

The app is for testing and research purposes only. No liability is assumed for any costs incurred or incorrect code. Execution at your own risk! The 

# The project contains
- `E-Commerce-App`
- `Artillery-Test-Scripts`

# E-Commerce-App
This is an example for a lightweight E-Commerce app developed with [Next.js](https://nextjs.org/) and hosted on the edge with AWS Lambda@Edge.

## Technologies
- [Next.js for server side rendering](https://nextjs.org/)
- [AWS Lambda@Edge for serverless hosting](https://aws.amazon.com/de/lambda/edge/)
- [Serverless Nextjs Plugin for deployment](https://www.serverless.com/plugins/serverless-nextjs-plugin)

## Getting Started

1. Install node_modules

```bash
npm install
# or
yarn install
```

2. Run the development server

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

3. Export AWS credentials as environment variables (you can find them in your AWS profile)

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
- MONGODB_URI:"MONGO_DB_URI", # connection string in your MongoDB account
- JWT_KEY: "JWT_KEY", # just type in a secret key
```

7. Deploy Next.js App serverless again with correct HOST_URL in `next.config.js`

```bash
npx serverless
```

8. After successfull Deployment, open your application in your browser with the url of your AWS CloudFront Distribution

# Artillery-Test-Scripts
1. Install node_modules

```bash
npm install
# or
yarn install
```
2. Install Artilery CLI
```bash
npm install -g artillery
# or
yarn install -g artillery
```

3. Execute scripts
```bash
# run script
npx artillery run  *.yml
```

# Sources to images in public folder

The images are for demonstration purposes only

- (hero1.jpg) https://www.shutterstock.com/de/image-photo/young-adult-bodybuilder-doing-weight-lifting-308873630
- (hero2.jpeg) https://cutewallpaper.org/28x/c3n2muexn/1575021202.html
- (hero3.jpeg) https://wp-test-dev.s3.amazonaws.com/public/uploads/2020/11/Workout-Pico-das-Torres-scaled-3.jpg
