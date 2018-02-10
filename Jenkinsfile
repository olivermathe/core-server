pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node/mongo'
    }
    
  }
  stages {
    stage('Deploy') {
      steps {
        sh 'service mongod --port 30050 && npm install && npm start'
      }
    }
  }
}