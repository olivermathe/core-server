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
        sh '''npm install
npm start'''
      }
    }
  }
}