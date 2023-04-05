## Togglecorp Website

Website for Togglecorp

## Getting Started

First, run the development server:

```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building

Build the project using:

```bash
yarn build
```

Get the statically generated website using:

```bash
yarn export
```

## Nginx
Sample for serving `yarn export` files.
```nginx
server {
    location / {
        alias /path-to-static-files/;
        try_files $uri $uri.html /$uri /404.html;
    }
}
```
