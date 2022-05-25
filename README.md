# Bilue React Challenge

Welcome to the Bilue React Challenge! The purpose of this challenge is to help us assess your technical skills. We know that you have limited time to devote to this task and may not be able to provide the complete solution as you would given more time, so we suggest you focus on the core requirements first, then any additional features if you have time left over.

## How this challenge will be assessed

At Bilue we believe the following skills are essential for successful software development:

- Mastery of computer science and software engineering fundamentals
- Understanding the broader context of software development
- Strong communication skills
- Good best practices

## OZ Bid

Oz Bid is an live auction app which want to bring transparency by creating a more realtime user experience. Anyone can come on the app and start a new Auction to sell their product. A product can have following attributes:

- Title
- Description
- Condition
- Category
- Quantity
- Min bid

Consumers can browse through list of active auction and can join to bid on the product. In order to bid on the product they need to provide below details:

1. Name
2. Email
3. Mobile

Along with that information seller can see two buttons: **Accept** and **Decline**

- Upon clicking on **Accept**, the bid must be updated to the **accepted** status in the database
- Upon clicking on **Decline**, the lead must be updated to the **declined** status in the database

Seller can accept the bid of their choice, upon which no further bid can be placed.

A consumer can see see in real time what is the current bid going on. If they have any query, they can ask the seller from within the app

## The Task

Please complete the task below:

1. List all active auctions
2. Create a new Auction
3. Add product to the Auction
4. Accept or reject bid
5. Join an auction
6. Place a bid

### Implementation Requirement

- Use `Redux` to store all the data
- Use `Redux` to do all data processing
- Use `Styled Component` or `Tailwind`(preinstalled) to style the application
- You may use `SVG loader` or `font-awesome` to assist with your UI
- Writing up unit test for each component using `Jest` or `React testing library`

### Notes

- For the icons in the UI if you choose to build one, you can use something like font-awesome or SVG icons, whatever you choose.
- The UI flow is provided below:

![ui flow diagram](https://github.com/Bilue/nodejs-tech-challenge/raw/main/ui-flow.jpg)

- Below is the relationship diagram:

![relationship diagram](https://github.com/Bilue/nodejs-tech-challenge/raw/main/relationship.jpg)

## Getting Started

We have provided a bit of boilerplate code and components that you can use to get started.

First install all the dependencies by running:

```
yarn install
```

Then start the application by running:

```
yarn start
```

## Comments / Documentation

Please document or comment all the solutions into your code for any explanation on your choices and decisions.

**Please include instructions on how to run your app if it is not using the boilerplate provided.**
