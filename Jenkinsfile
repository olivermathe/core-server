pipeline {
  agent {
    docker {
      image 'node/mongo'
      args '-p 3000:3000'
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