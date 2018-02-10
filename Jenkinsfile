pipeline {
  agent {
    docker {
      image 'node'
      args '-p 3000:3000'
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