services:
  - type: web
    name: dignets
    env: node
    plan: free
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_VERSION
        value: 20
      - key: PORT
        value: 5177
