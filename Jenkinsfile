pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'olivermathe/node-mongo-pm2'
    }
    
  }
  stages {
    stage('Deploy') {
      steps {
        sh '''service mongod --port 30050
npm install
npm start'''
      }
    }
  }
}