module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'core-server',
      script    : 'server.js',
      env_production : {
        NODE_ENV: 'production'
      },
      env_homolog : {
        NODE_ENV: 'homolog'
      },
      env_development : {
        NODE_ENV: 'development'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      key  : 'C:/Desenv/ec2-key.pem',
      user : 'ubuntu',
      host : '54.233.99.26',
      ref  : 'origin/master',
      repo : 'git@github.com:olivermathe/core-server.git',
      path : '/home/ubuntu/www/core-server',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    homolog : {
      user : 'ubuntu',
      host : '54.233.99.26',
      key  : 'C:/Desenv/ec2-key.pem',
      ref  : 'origin/homolog',
      repo : 'git@github.com:olivermathe/core-server.git',
      path : '/home/ubuntu/www/core-server',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env homolog'
    }
  }
};
