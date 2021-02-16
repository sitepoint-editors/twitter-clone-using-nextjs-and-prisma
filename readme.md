# Twitter Clone Using Next.js and Prisma

A full-stack application, built using [Next.js](https://nextjs.org/) and [Prisma](https://www.prisma.io/), which implements a bare-bones Twitter clone.

## Requirements

* [Node.js](http://nodejs.org/)
* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/get-docker/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install/) (optional)

## Installation Steps

1. Clone repo
2. Run `yarn install`
3. Run `docker-compose up`
4. Create a `.env` file as described in the article
5. In the project root run the following commands:
    - `npx prisma generate`
    - `npx prisma migrate dev --preview-feature`
    - `npx prisma db seed --preview-feature`
6. Run `yarn dev`
4. Visit <http://localhost:3000> to view the app

## License

SitePoint's code archives and code examples are licensed under the MIT license.

Copyright © 2021 SitePoint

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

