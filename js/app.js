{
    "configurations" [
      {
        "type": "node",
        "request": "launch",
        "name": "Launch Webpack Dev Server",
        "program": "${workspaceFolder}/node_modules/webpack-dev-server/bin/webpack-dev-server.js",
        "args": [
          "--config",
          "${workspaceFolder}/webpack.config.dev.js"
        ],
        "preLaunchTask": "npm: start"
      }
    ]
}